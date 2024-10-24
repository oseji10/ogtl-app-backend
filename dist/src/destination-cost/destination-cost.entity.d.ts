import { Destinations } from '../destinations/destinations.entity';
export declare class DestinationCost {
    costId: string;
    cost: number;
    destination: Destinations;
    discountCode: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
