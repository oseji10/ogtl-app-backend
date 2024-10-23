import { Test, TestingModule } from '@nestjs/testing';
import { DestinationCostService } from './destination-cost.service';

describe('DestinationCostService', () => {
  let service: DestinationCostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinationCostService],
    }).compile();

    service = module.get<DestinationCostService>(DestinationCostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
