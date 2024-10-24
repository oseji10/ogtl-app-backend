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
exports.Trips = void 0;
const buses_entity_1 = require("../buses/buses.entity");
const destinations_entity_1 = require("../destinations/destinations.entity");
const typeorm_1 = require("typeorm");
let Trips = class Trips {
};
exports.Trips = Trips;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Trips.prototype, "tripID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => destinations_entity_1.Destinations, (destinations) => destinations.destinationID),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", destinations_entity_1.Destinations)
], Trips.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => buses_entity_1.Buses, (buses) => buses.busId),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", buses_entity_1.Buses)
], Trips.prototype, "bus", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Trips.prototype, "numberOfSeats", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Trips.prototype, "departureDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Trips.prototype, "departureTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, enum: ['active', 'inactive'], default: 'active' }),
    __metadata("design:type", String)
], Trips.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Trips.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Trips.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], Trips.prototype, "deletedAt", void 0);
exports.Trips = Trips = __decorate([
    (0, typeorm_1.Entity)()
], Trips);
//# sourceMappingURL=trips.entity.js.map