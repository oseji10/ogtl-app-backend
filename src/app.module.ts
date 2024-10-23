import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { LocationsModule } from './locations/locations.module';
import { TripsModule } from './trips/trips.module';
import { DestinationsModule } from './destinations/destinations.module';
import { DestinationCostModule } from './destination-cost/destination-cost.module';
import { BusesModule } from './buses/buses.module';
import { PassengersModule } from './passengers/passengers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    // MulterModule.register({
    //   dest: './uploads', // Temporary folder for file uploads
    // }),
    // TypeOrmModule.forFeature([PricelistProductsModule]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      // username: "postgres",
      // password: "2wsxzaQ1!",
      // database: "ogtl",

      username: "jursfawz_oseji",
      password: "6ytrew21!2wsxzaQ1!",
      database: "jursfawz_ogtl_transport",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [join(__dirname, 'migrations/*.ts')],
      synchronize: true,  // set to 'false' in production
      
    }),
    DriversModule, LocationsModule, TripsModule, DestinationsModule, DestinationCostModule, BusesModule, PassengersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
