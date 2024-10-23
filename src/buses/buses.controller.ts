import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BusesService } from './buses.service';
import { Buses } from './buses.entity';

@Controller('buses')
export class BusesController {
  constructor(private readonly busesService: BusesService) {}

  @Get()
  findAll() {
    return this.busesService.findAll();
  }

  @Get(':busID')
  findOne(@Param('busID') busID: string) {
    return this.busesService.findOne(busID);
  }

  @Post()
  create(@Body() buses: Buses) {
    return this.busesService.create(buses);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() buses: Buses) {
    return this.busesService.update(id, buses);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.busesService.remove(id);
  }
}
