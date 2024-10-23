import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trips } from './trips.entity';

@Injectable()
export class TripsService {
  constructor(
    @InjectRepository(Trips)
    private tripsRepository: Repository<Trips>,
  ) {}

  findAll(): Promise<Trips[]> {
    return this.tripsRepository.find();
  }

  findOne(tripID: string): Promise<Trips> {
    return this.tripsRepository.findOne({ where: { tripID }});
  }

  create(trips: Trips): Promise<Trips> {
    return this.tripsRepository.save(trips);
  }

  async update(id: string, trips: Trips): Promise<Trips> {
    await this.tripsRepository.update(id, trips);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tripsRepository.delete(id);
  }
}
