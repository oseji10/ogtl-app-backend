import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { Destinations } from './destinations.entity';
import { DestinationCost } from '../destination-cost/destination-cost.entity';
import { Trips } from '../trips/trips.entity';

@Injectable()
export class DestinationsService {
  constructor(
    @InjectRepository(Destinations)
    private destinationsRepository: Repository<Destinations>,

    @InjectRepository(Trips)
    private tripsRepository: Repository<Trips>,

    @InjectRepository(DestinationCost)
    private readonly destinationCostRepository: Repository<DestinationCost>,
    private readonly entityManager: EntityManager, 
  ) {}

  findAll(): Promise<Destinations[]> {
    return this.destinationsRepository.find();
  }

//   findOne(destinationID: string): Promise<Destinations> {
//     return this.destinationsRepository.findOne({ where: { destinationID }});
//   }

// findOne(from: string, to: string): Promise<Destinations> {
//     return this.destinationsRepository.findOne({
//       where: {
//         from: { locationID: from }, // Assuming fromID corresponds to a field in Locations
//         to: { locationID: to },       // Assuming toID corresponds to a field in Locations
//       },
//     });
//   }

// In your service or repository
async findTrip(from: string, to: string, departureDate: Date): Promise<Trips[]> {
    // Step 1: Find the destination based on `from` and `to`
    const destination = await this.destinationsRepository.findOne({
      where: {
        from: { locationID: from },  // Match the `from` location ID
        to: { locationID: to },      // Match the `to` location ID
      },
    });
  
    if (!destination) {
      throw new Error(`No destination found for the given route. ${destination.destinationName}`);
    }
  
    // Step 2: Query the trips table based on destinationID and travel date
    const trips = await this.tripsRepository.find({
      where: {
        destination: { destinationID: destination.destinationID },  // Use destinationID for the query
        departureDate: departureDate,  // Match the travel date
      },
      relations: ['destination', 'bus', 
        'destination.destination_cost'
    ],
    });
  
    if (trips.length === 0) {
      throw new Error('No trips available for the selected date.');
    }
  
    return trips;
  }
  
  


  async createDestinationWithCost(destination: Destinations, cost: DestinationCost): Promise<Destinations> {
    // Use a transaction to ensure both the destination and cost are saved atomically
    return await this.entityManager.transaction(async (transactionalEntityManager) => {
      // Save the destination first
      const savedDestination = await transactionalEntityManager.save(Destinations, destination);

      // Once the destination is saved, set the destinationID in the cost entity
      cost.destination = savedDestination;

      // Save the cost entity with the associated destinationID
      await transactionalEntityManager.save(DestinationCost, cost);

      // Return the saved destination
      return savedDestination;
    });
  }

  
  

//   create(destinations: Destinations): Promise<Destinations> {
//     return this.destinationsRepository.save(destinations);
//   }

//   async update(id: string, destinations: Destinations): Promise<Destinations> {
//     await this.destinationsRepository.update(id, destinations);
//     return this.findOne(id);
//   }

  async remove(id: string): Promise<void> {
    await this.destinationsRepository.delete(id);
  }
}
