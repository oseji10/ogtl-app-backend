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
exports.PassengersController = void 0;
const common_1 = require("@nestjs/common");
const passengers_service_1 = require("./passengers.service");
const passengers_entity_1 = require("./passengers.entity");
let PassengersController = class PassengersController {
    constructor(passengersService) {
        this.passengersService = passengersService;
    }
    findAll() {
        return this.passengersService.findAll();
    }
    findOne(passengerID) {
        return this.passengersService.findOne(passengerID);
    }
    create(passengers) {
        return this.passengersService.create(passengers);
    }
    update(id, passengers) {
        return this.passengersService.update(id, passengers);
    }
    remove(id) {
        return this.passengersService.remove(id);
    }
};
exports.PassengersController = PassengersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PassengersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':passengerID'),
    __param(0, (0, common_1.Param)('passengerID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PassengersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [passengers_entity_1.Passengers]),
    __metadata("design:returntype", void 0)
], PassengersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, passengers_entity_1.Passengers]),
    __metadata("design:returntype", void 0)
], PassengersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PassengersController.prototype, "remove", null);
exports.PassengersController = PassengersController = __decorate([
    (0, common_1.Controller)('passengers'),
    __metadata("design:paramtypes", [passengers_service_1.PassengersService])
], PassengersController);
//# sourceMappingURL=passengers.controller.js.map