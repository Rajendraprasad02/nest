import { Test, TestingModule } from '@nestjs/testing';
import { OgrnizationService } from './ogrnization.service';

describe('OgrnizationService', () => {
  let service: OgrnizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OgrnizationService],
    }).compile();

    service = module.get<OgrnizationService>(OgrnizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
