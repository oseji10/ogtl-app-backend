import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Passengers } from './passengers.entity';

@Injectable()
export class PassengersService {
  constructor(
    @InjectRepository(Passengers)
    private passengersRepository: Repository<Passengers>,
  ) {}

  findAll(): Promise<Passengers[]> {
    return this.passengersRepository.find();
  }

  findOne(passengerID: string): Promise<Passengers> {
    return this.passengersRepository.findOne({ where: { passengerID }});
  }

  create(passengers: Passengers): Promise<Passengers> {
    return this.passengersRepository.save(passengers);
  }

  async update(id: string, passengers: Passengers): Promise<Passengers> {
    await this.passengersRepository.update(id, passengers);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.passengersRepository.delete(id);
  }
}
