import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buses } from './buses.entity';

@Injectable()
export class BusesService {
  constructor(
    @InjectRepository(Buses)
    private busesRepository: Repository<Buses>,
  ) {}

  findAll(): Promise<Buses[]> {
    return this.busesRepository.find();
  }

  findOne(busId: string): Promise<Buses> {
    return this.busesRepository.findOne({ where: { busId }});
  }

  create(buses: Buses): Promise<Buses> {
    return this.busesRepository.save(buses);
  }

  async update(id: string, buses: Buses): Promise<Buses> {
    await this.busesRepository.update(id, buses);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.busesRepository.delete(id);
  }
}
