"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusesModule = void 0;
const common_1 = require("@nestjs/common");
const buses_service_1 = require("./buses.service");
const buses_controller_1 = require("./buses.controller");
const typeorm_1 = require("@nestjs/typeorm");
const buses_entity_1 = require("./buses.entity");
let BusesModule = class BusesModule {
};
exports.BusesModule = BusesModule;
exports.BusesModule = BusesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([buses_entity_1.Buses])],
        providers: [buses_service_1.BusesService],
        controllers: [buses_controller_1.BusesController]
    })
], BusesModule);
//# sourceMappingURL=buses.module.js.map