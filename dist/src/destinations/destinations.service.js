"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const destinations_entity_1 = require("./destinations.entity");
const destination_cost_entity_1 = require("../destination-cost/destination-cost.entity");
const trips_entity_1 = require("../trips/trips.entity");
let DestinationsService = class DestinationsService {
    constructor(destinationsRepository, tripsRepository, destinationCostRepository, entityManager) {
        this.destinationsRepository = destinationsRepository;
        this.tripsRepository = tripsRepository;
        this.destinationCostRepository = destinationCostRepository;
        this.entityManager = entityManager;
    }
    findAll() {
        return this.destinationsRepository.find();
    }
    async findTrip(from, to, departureDate) {
        const destination = await this.destinationsRepository.findOne({
            where: {
                from: { locationID: from },
                to: { locationID: to },
            },
        });
        if (!destination) {
            throw new Error(`No destination found for the given route. ${destination.destinationName}`);
        }
        const trips = await this.tripsRepository.find({
            where: {
                destination: { destinationID: destination.destinationID },
                departureDate: departureDate,
            },
            relations: ['destination', 'bus',
                'destination.destination_cost'
            ],
        });
        if (trips.length === 0) {
            throw new Error('No trips available for the selected date.');
        }
        return trips;
    }
    async createDestinationWithCost(destination, cost) {
        return await this.entityManager.transaction(async (transactionalEntityManager) => {
            const savedDestination = await transactionalEntityManager.save(destinations_entity_1.Destinations, destination);
            cost.destination = savedDestination;
            await transactionalEntityManager.save(destination_cost_entity_1.DestinationCost, cost);
            return savedDestination;
        });
    }
    async remove(id) {
        await this.destinationsRepository.delete(id);
    }
};
exports.DestinationsService = DestinationsService;
exports.DestinationsService = DestinationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(destinations_entity_1.Destinations)),
    __param(1, (0, typeorm_1.InjectRepository)(trips_entity_1.Trips)),
    __param(2, (0, typeorm_1.InjectRepository)(destination_cost_entity_1.DestinationCost)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.EntityManager])
], DestinationsService);
//# sourceMappingURL=destinations.service.js.map