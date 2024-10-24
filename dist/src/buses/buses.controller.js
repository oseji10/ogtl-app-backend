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
exports.BusesController = void 0;
const common_1 = require("@nestjs/common");
const buses_service_1 = require("./buses.service");
const buses_entity_1 = require("./buses.entity");
let BusesController = class BusesController {
    constructor(busesService) {
        this.busesService = busesService;
    }
    findAll() {
        return this.busesService.findAll();
    }
    findOne(busID) {
        return this.busesService.findOne(busID);
    }
    create(buses) {
        return this.busesService.create(buses);
    }
    update(id, buses) {
        return this.busesService.update(id, buses);
    }
    remove(id) {
        return this.busesService.remove(id);
    }
};
exports.BusesController = BusesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BusesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':busID'),
    __param(0, (0, common_1.Param)('busID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [buses_entity_1.Buses]),
    __metadata("design:returntype", void 0)
], BusesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, buses_entity_1.Buses]),
    __metadata("design:returntype", void 0)
], BusesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusesController.prototype, "remove", null);
exports.BusesController = BusesController = __decorate([
    (0, common_1.Controller)('buses'),
    __metadata("design:paramtypes", [buses_service_1.BusesService])
], BusesController);
//# sourceMappingURL=buses.controller.js.map