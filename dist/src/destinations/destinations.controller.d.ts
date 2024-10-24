import { DestinationsService } from './destinations.service';
import { Destinations } from './destinations.entity';
import { DestinationCost } from '../destination-cost/destination-cost.entity';
import { Trips } from '../trips/trips.entity';
export declare class DestinationsController {
    private readonly destinationsService;
    constructor(destinationsService: DestinationsService);
    findAll(): Promise<Destinations[]>;
    searchTrips(from: string, to: string, departureDate: Date): Promise<Trips[]>;
    createDestinationWithCost(createDestinationDto: {
        destination: Destinations;
        cost: DestinationCost;
    }): Promise<Destinations>;
    remove(id: string): Promise<void>;
}
