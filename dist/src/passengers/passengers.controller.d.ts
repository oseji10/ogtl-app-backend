import { PassengersService } from './passengers.service';
import { Passengers } from './passengers.entity';
export declare class PassengersController {
    private readonly passengersService;
    constructor(passengersService: PassengersService);
    findAll(): Promise<Passengers[]>;
    findOne(passengerID: string): Promise<Passengers>;
    create(passengers: Passengers): Promise<Passengers>;
    update(id: string, passengers: Passengers): Promise<Passengers>;
    remove(id: string): Promise<void>;
}
