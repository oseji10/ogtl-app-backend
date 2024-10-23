import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Locations } from './locations.entity';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  findAll() {
    return this.locationsService.findAll();
  }

  @Get(':busID')
  findOne(@Param('busID') busID: string) {
    return this.locationsService.findOne(busID);
  }

  @Post()
  create(@Body() locations: Locations) {
    return this.locationsService.create(locations);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() locations: Locations) {
    return this.locationsService.update(id, locations);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationsService.remove(id);
  }
}
