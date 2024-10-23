import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TripsService } from './trips.service';
import { Trips } from './trips.entity';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get()
  findAll() {
    return this.tripsService.findAll();
  }

  @Get(':tripID')
  findOne(@Param('tripID') tripID: string) {
    return this.tripsService.findOne(tripID);
  }

  @Post()
  create(@Body() trips: Trips) {
    return this.tripsService.create(trips);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() trips: Trips) {
    return this.tripsService.update(id, trips);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripsService.remove(id);
  }
}
