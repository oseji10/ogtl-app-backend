import { Locations } from '../locations/locations.entity';
import { DestinationCost } from 'src/destination-cost/destination-cost.entity';
export declare class Destinations {
    destinationID: string;
    from: Locations;
    to: Locations;
    destinationName: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    destination_cost: DestinationCost[];
}
