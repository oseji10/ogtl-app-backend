import { Repository } from 'typeorm';
import { Trips } from './trips.entity';
export declare class TripsService {
    private tripsRepository;
    constructor(tripsRepository: Repository<Trips>);
    findAll(): Promise<Trips[]>;
    findOne(tripID: string): Promise<Trips>;
    create(trips: Trips): Promise<Trips>;
    update(id: string, trips: Trips): Promise<Trips>;
    remove(id: string): Promise<void>;
}
