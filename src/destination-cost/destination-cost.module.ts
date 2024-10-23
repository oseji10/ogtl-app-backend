import { Module } from '@nestjs/common';
import { DestinationCostService } from './destination-cost.service';
import { DestinationCostController } from './destination-cost.controller';

@Module({
  providers: [DestinationCostService],
  controllers: [DestinationCostController]
})
export class DestinationCostModule {}
