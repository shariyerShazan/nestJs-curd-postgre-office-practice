import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceRegistryModule } from './service-registry/service-registry.module';

@Module({
  imports: [ServiceRegistryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
