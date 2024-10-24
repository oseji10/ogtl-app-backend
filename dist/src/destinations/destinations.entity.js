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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destinations = void 0;
const typeorm_1 = require("typeorm");
const locations_entity_1 = require("../locations/locations.entity");
const destination_cost_entity_1 = require("../destination-cost/destination-cost.entity");
let Destinations = class Destinations {
};
exports.Destinations = Destinations;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Destinations.prototype, "destinationID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => locations_entity_1.Locations, (locations) => locations.locationID),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", locations_entity_1.Locations)
], Destinations.prototype, "from", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => locations_entity_1.Locations, (locations) => locations.locationID),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", locations_entity_1.Locations)
], Destinations.prototype, "to", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Destinations.prototype, "destinationName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, enum: ['active', 'inactive'], default: 'active' }),
    __metadata("design:type", String)
], Destinations.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Destinations.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Destinations.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], Destinations.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => destination_cost_entity_1.DestinationCost, (destination_cost) => destination_cost.destination),
    __metadata("design:type", Array)
], Destinations.prototype, "destination_cost", void 0);
exports.Destinations = Destinations = __decorate([
    (0, typeorm_1.Entity)()
], Destinations);
//# sourceMappingURL=destinations.entity.js.map