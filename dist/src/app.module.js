"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const drivers_module_1 = require("./drivers/drivers.module");
const locations_module_1 = require("./locations/locations.module");
const trips_module_1 = require("./trips/trips.module");
const destinations_module_1 = require("./destinations/destinations.module");
const destination_cost_module_1 = require("./destination-cost/destination-cost.module");
const buses_module_1 = require("./buses/buses.module");
const passengers_module_1 = require("./passengers/passengers.module");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: "jursfawz_oseji",
                password: "6ytrew21!2wsxzaQ1!",
                database: "jursfawz_ogtl_transport",
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                migrations: [(0, path_1.join)(__dirname, 'migrations/*.ts')],
                synchronize: true,
            }),
            drivers_module_1.DriversModule, locations_module_1.LocationsModule, trips_module_1.TripsModule, destinations_module_1.DestinationsModule, destination_cost_module_1.DestinationCostModule, buses_module_1.BusesModule, passengers_module_1.PassengersModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map