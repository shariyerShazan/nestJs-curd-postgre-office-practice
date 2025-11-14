import { Injectable, Logger } from '@nestjs/common';

interface ServiceInfo {
  timestamp: number;
  ip: string;
  port: number;
  version: string;
}

@Injectable()
export class ServiceRegistryService {
  private readonly logger = new Logger(ServiceRegistryService.name);

  // Service store
  private services: Record<string, ServiceInfo> = {};

  // 30 seconds timeout (should come from env ideally)
  private timeout = 30;

  // Helper: Get current timestamp
  private getTimestamp(): number {
    return Math.floor(Date.now() / 1000);
  }

  // Create unique key safely
  private generateKey(name: string, version: string, ip: string, port: number) {
    return `${name}:${version}:${ip}:${port}`;
  }

  // Register or heartbeat refresh
  register(
    name: string,
    version: string,
    ip: string,
    port: number,
  ): { key: string; message: string } {
    const key = this.generateKey(name, version, ip, port);

    if (!this.services[key]) {
      // New service
      this.services[key] = {
        timestamp: this.getTimestamp(),
        ip,
        port,
        version,
      };

      this.logger.debug(`Service added: ${key}`);

      return { key, message: 'Service successfully registered' };
    }

    // Existing service → update timestamp (heartbeat)
    this.services[key].timestamp = this.getTimestamp();

    return { key, message: 'Service already registered — timestamp refreshed' };
  }

  // Remove dead services
  cleanUp(): void {
    const now = this.getTimestamp();

    Object.keys(this.services).forEach((key) => {
      if (this.services[key].timestamp + this.timeout < now) {
        delete this.services[key];
        this.logger.debug(`Removed inactive service: ${key}`);
      }
    });
  }

  // Manually remove a service
  unRegister(
    name: string,
    version: string,
    ip: string,
    port: number, // FIXED TYPE
  ): { key: string; message: string } {
    const key = this.generateKey(name, version, ip, port);

    delete this.services[key];
    this.logger.debug(`Service removed manually: ${key}`);

    return { key, message: 'Service removed' };
  }
}
