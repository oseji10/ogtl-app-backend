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
exports.Passengers = void 0;
const buses_entity_1 = require("../buses/buses.entity");
const destinations_entity_1 = require("../destinations/destinations.entity");
const typeorm_1 = require("typeorm");
let Passengers = class Passengers {
};
exports.Passengers = Passengers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Passengers.prototype, "passengerID", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => destinations_entity_1.Destinations, (destinations) => destinations.destinationID),
    __metadata("design:type", destinations_entity_1.Destinations)
], Passengers.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => buses_entity_1.Buses, (buses) => buses.busId),
    __metadata("design:type", buses_entity_1.Buses)
], Passengers.prototype, "bus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Passengers.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Passengers.prototype, "otherNames", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Passengers.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Passengers.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Passengers.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Passengers.prototype, "nextOfKinName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Passengers.prototype, "nextOfKinAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Passengers.prototype, "nextOfKinPhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Passengers.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, enum: ['active', 'inactive'] }),
    __metadata("design:type", String)
], Passengers.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Passengers.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Passengers.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], Passengers.prototype, "deletedAt", void 0);
exports.Passengers = Passengers = __decorate([
    (0, typeorm_1.Entity)()
], Passengers);
//# sourceMappingURL=passengers.entity.js.map