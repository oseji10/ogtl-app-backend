import { Module } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { DestinationsController } from './destinations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Destinations } from './destinations.entity';
import { DestinationCost } from '../destination-cost/destination-cost.entity';
import { Trips } from '../trips/trips.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Destinations, DestinationCost, Trips])],
  providers: [DestinationsService],
  controllers: [DestinationsController]
})
export class DestinationsModule {}
