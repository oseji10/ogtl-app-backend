import { LocationsService } from './locations.service';
import { Locations } from './locations.entity';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    findAll(): Promise<Locations[]>;
    findOne(busID: string): Promise<Locations>;
    create(locations: Locations): Promise<Locations>;
    update(id: string, locations: Locations): Promise<Locations>;
    remove(id: string): Promise<void>;
}
