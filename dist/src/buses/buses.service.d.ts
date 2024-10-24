import { Repository } from 'typeorm';
import { Buses } from './buses.entity';
export declare class BusesService {
    private busesRepository;
    constructor(busesRepository: Repository<Buses>);
    findAll(): Promise<Buses[]>;
    findOne(busId: string): Promise<Buses>;
    create(buses: Buses): Promise<Buses>;
    update(id: string, buses: Buses): Promise<Buses>;
    remove(id: string): Promise<void>;
}
