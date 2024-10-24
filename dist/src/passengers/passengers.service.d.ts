import { Repository } from 'typeorm';
import { Passengers } from './passengers.entity';
export declare class PassengersService {
    private passengersRepository;
    constructor(passengersRepository: Repository<Passengers>);
    findAll(): Promise<Passengers[]>;
    findOne(passengerID: string): Promise<Passengers>;
    create(passengers: Passengers): Promise<Passengers>;
    update(id: string, passengers: Passengers): Promise<Passengers>;
    remove(id: string): Promise<void>;
}
