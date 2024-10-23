import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, Query } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { Destinations } from './destinations.entity';
import { DestinationCost } from '../destination-cost/destination-cost.entity';
import { Trips } from '../trips/trips.entity';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  findAll() {
    return this.destinationsService.findAll();
  }

//   @Get(':destinationID')
//   findOne(@Param('destinationID') destinationID: string) {
//     return this.destinationsService.findOne(destinationID);
//   }

// @Get(':from/:to')
//   async findOne(
//     @Param('from') from: string,
//     @Param('to') to: string,
//   ): Promise<Destinations> {
//     const destination = await this.destinationsService.findOne(from, to);
    
//     if (!destination) {
//       throw new NotFoundException(`Destination not found for: ${from} and: ${to}`);
//     }

//     return destination;
//   }


// In your controller, for handling the API request
@Get('search')
async searchTrips(
  @Query('from') from: string,
  @Query('to') to: string,
  @Query('departureDate') departureDate: Date
): Promise<Trips[]> {
  return this.destinationsService.findTrip(from, to, departureDate);
}



  @Post()
  async createDestinationWithCost(
    @Body() createDestinationDto: { destination: Destinations; cost: DestinationCost },
  ): Promise<Destinations> {
    const { destination, cost } = createDestinationDto;

    // Call the service method to create the destination and cost together
    const savedDestination = await this.destinationsService.createDestinationWithCost(destination, cost);

    return savedDestination;
  }

//   @Post()
//   create(@Body() destinations: Destinations) {
//     return this.destinationsService.create(destinations);
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() destinations: Destinations) {
//     return this.destinationsService.update(id, destinations);
//   }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinationsService.remove(id);
  }
}
