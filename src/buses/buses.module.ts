import { Module } from '@nestjs/common';
import { BusesService } from './buses.service';
import { BusesController } from './buses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buses } from './buses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Buses])],
  providers: [BusesService],
  controllers: [BusesController]
})
export class BusesModule {}
