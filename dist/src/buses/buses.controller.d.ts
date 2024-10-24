import { BusesService } from './buses.service';
import { Buses } from './buses.entity';
export declare class BusesController {
    private readonly busesService;
    constructor(busesService: BusesService);
    findAll(): Promise<Buses[]>;
    findOne(busID: string): Promise<Buses>;
    create(buses: Buses): Promise<Buses>;
    update(id: string, buses: Buses): Promise<Buses>;
    remove(id: string): Promise<void>;
}
