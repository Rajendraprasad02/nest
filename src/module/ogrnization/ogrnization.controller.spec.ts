import { Test, TestingModule } from '@nestjs/testing';
import { OgrnizationController } from './ogrnization.controller';
import { OgrnizationService } from './ogrnization.service';

describe('OgrnizationController', () => {
  let controller: OgrnizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OgrnizationController],
      providers: [OgrnizationService],
    }).compile();

    controller = module.get<OgrnizationController>(OgrnizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
