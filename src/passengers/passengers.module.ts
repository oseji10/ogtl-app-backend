import { Module } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { PassengersController } from './passengers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passengers } from './passengers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Passengers])],
  providers: [PassengersService],
  controllers: [PassengersController]
})
export class PassengersModule {}
