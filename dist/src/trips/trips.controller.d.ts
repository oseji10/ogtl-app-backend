import { TripsService } from './trips.service';
import { Trips } from './trips.entity';
export declare class TripsController {
    private readonly tripsService;
    constructor(tripsService: TripsService);
    findAll(): Promise<Trips[]>;
    findOne(tripID: string): Promise<Trips>;
    create(trips: Trips): Promise<Trips>;
    update(id: string, trips: Trips): Promise<Trips>;
    remove(id: string): Promise<void>;
}
