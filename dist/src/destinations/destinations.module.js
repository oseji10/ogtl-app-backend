"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationsModule = void 0;
const common_1 = require("@nestjs/common");
const destinations_service_1 = require("./destinations.service");
const destinations_controller_1 = require("./destinations.controller");
const typeorm_1 = require("@nestjs/typeorm");
const destinations_entity_1 = require("./destinations.entity");
const destination_cost_entity_1 = require("../destination-cost/destination-cost.entity");
const trips_entity_1 = require("../trips/trips.entity");
let DestinationsModule = class DestinationsModule {
};
exports.DestinationsModule = DestinationsModule;
exports.DestinationsModule = DestinationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([destinations_entity_1.Destinations, destination_cost_entity_1.DestinationCost, trips_entity_1.Trips])],
        providers: [destinations_service_1.DestinationsService],
        controllers: [destinations_controller_1.DestinationsController]
    })
], DestinationsModule);
//# sourceMappingURL=destinations.module.js.map