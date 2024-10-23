import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { Passengers } from './passengers.entity';

@Controller('passengers')
export class PassengersController {
  constructor(private readonly passengersService: PassengersService) {}

  @Get()
  findAll() {
    return this.passengersService.findAll();
  }

  @Get(':passengerID')
  findOne(@Param('passengerID') passengerID: string) {
    return this.passengersService.findOne(passengerID);
  }

  @Post()
  create(@Body() passengers: Passengers) {
    return this.passengersService.create(passengers);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() passengers: Passengers) {
    return this.passengersService.update(id, passengers);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengersService.remove(id);
  }
}
