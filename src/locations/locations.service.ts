import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locations } from './locations.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Locations)
    private locationsRepository: Repository<Locations>,
  ) {}

  findAll(): Promise<Locations[]> {
    return this.locationsRepository.find();
  }

  findOne(locationID: string): Promise<Locations> {
    return this.locationsRepository.findOne({ where: { locationID }});
  }

  create(locations: Locations): Promise<Locations> {
    return this.locationsRepository.save(locations);
  }

  async update(id: string, locations: Locations): Promise<Locations> {
    await this.locationsRepository.update(id, locations);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.locationsRepository.delete(id);
  }
}
