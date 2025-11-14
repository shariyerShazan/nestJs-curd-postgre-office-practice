import { Module } from '@nestjs/common';
import { ServiceRegistryService } from './service-registry.service';
import { ServiceRegistryController } from './service-registry.controller';

@Module({
  providers: [ServiceRegistryService],
  controllers: [ServiceRegistryController]
})
export class ServiceRegistryModule {}
