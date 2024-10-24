import { Buses } from '../buses/buses.entity';
import { Destinations } from '../destinations/destinations.entity';
export declare class Trips {
    tripID: string;
    destination: Destinations;
    bus: Buses;
    numberOfSeats: number;
    departureDate: Date;
    departureTime: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
