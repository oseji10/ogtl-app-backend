import { Buses } from '../buses/buses.entity';
import { Destinations } from '../destinations/destinations.entity';
export declare class Passengers {
    passengerID: string;
    destination: Destinations;
    bus: Buses;
    firstName: string;
    otherNames: string;
    phoneNumber: number;
    email: string;
    address: string;
    nextOfKinName: string;
    nextOfKinAddress: string;
    nextOfKinPhoneNumber: number;
    date: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
