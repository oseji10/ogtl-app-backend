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
exports.DestinationCost = void 0;
const destinations_entity_1 = require("../destinations/destinations.entity");
const typeorm_1 = require("typeorm");
let DestinationCost = class DestinationCost {
};
exports.DestinationCost = DestinationCost;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], DestinationCost.prototype, "costId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], DestinationCost.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => destinations_entity_1.Destinations, (destination) => destination.destination_cost),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", destinations_entity_1.Destinations)
], DestinationCost.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DestinationCost.prototype, "discountCode", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], DestinationCost.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], DestinationCost.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], DestinationCost.prototype, "deletedAt", void 0);
exports.DestinationCost = DestinationCost = __decorate([
    (0, typeorm_1.Entity)()
], DestinationCost);
//# sourceMappingURL=destination-cost.entity.js.map