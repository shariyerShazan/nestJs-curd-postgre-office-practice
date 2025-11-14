import { Test, TestingModule } from '@nestjs/testing';
import { ServiceRegistryService } from './service-registry.service';

describe('ServiceRegistryService', () => {
  let service: ServiceRegistryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceRegistryService],
    }).compile();

    service = module.get<ServiceRegistryService>(ServiceRegistryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
