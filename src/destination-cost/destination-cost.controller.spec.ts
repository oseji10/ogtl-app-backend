import { Test, TestingModule } from '@nestjs/testing';
import { DestinationCostController } from './destination-cost.controller';

describe('DestinationCostController', () => {
  let controller: DestinationCostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinationCostController],
    }).compile();

    controller = module.get<DestinationCostController>(DestinationCostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
