import { Repository } from 'typeorm';
import { Locations } from './locations.entity';
export declare class LocationsService {
    private locationsRepository;
    constructor(locationsRepository: Repository<Locations>);
    findAll(): Promise<Locations[]>;
    findOne(locationID: string): Promise<Locations>;
    create(locations: Locations): Promise<Locations>;
    update(id: string, locations: Locations): Promise<Locations>;
    remove(id: string): Promise<void>;
}
