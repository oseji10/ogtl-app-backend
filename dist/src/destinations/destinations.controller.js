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
exports.DestinationsController = void 0;
const common_1 = require("@nestjs/common");
const destinations_service_1 = require("./destinations.service");
let DestinationsController = class DestinationsController {
    constructor(destinationsService) {
        this.destinationsService = destinationsService;
    }
    findAll() {
        return this.destinationsService.findAll();
    }
    async searchTrips(from, to, departureDate) {
        return this.destinationsService.findTrip(from, to, departureDate);
    }
    async createDestinationWithCost(createDestinationDto) {
        const { destination, cost } = createDestinationDto;
        const savedDestination = await this.destinationsService.createDestinationWithCost(destination, cost);
        return savedDestination;
    }
    remove(id) {
        return this.destinationsService.remove(id);
    }
};
exports.DestinationsController = DestinationsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DestinationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('to')),
    __param(2, (0, common_1.Query)('departureDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Date]),
    __metadata("design:returntype", Promise)
], DestinationsController.prototype, "searchTrips", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DestinationsController.prototype, "createDestinationWithCost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DestinationsController.prototype, "remove", null);
exports.DestinationsController = DestinationsController = __decorate([
    (0, common_1.Controller)('destinations'),
    __metadata("design:paramtypes", [destinations_service_1.DestinationsService])
], DestinationsController);
//# sourceMappingURL=destinations.controller.js.map