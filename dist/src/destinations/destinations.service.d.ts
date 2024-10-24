import { Repository, EntityManager } from 'typeorm';
import { Destinations } from './destinations.entity';
import { DestinationCost } from '../destination-cost/destination-cost.entity';
import { Trips } from '../trips/trips.entity';
export declare class DestinationsService {
    private destinationsRepository;
    private tripsRepository;
    private readonly destinationCostRepository;
    private readonly entityManager;
    constructor(destinationsRepository: Repository<Destinations>, tripsRepository: Repository<Trips>, destinationCostRepository: Repository<DestinationCost>, entityManager: EntityManager);
    findAll(): Promise<Destinations[]>;
    findTrip(from: string, to: string, departureDate: Date): Promise<Trips[]>;
    createDestinationWithCost(destination: Destinations, cost: DestinationCost): Promise<Destinations>;
    remove(id: string): Promise<void>;
}
