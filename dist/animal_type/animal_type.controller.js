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
exports.AnimalTypeController = void 0;
const common_1 = require("@nestjs/common");
const animal_type_service_1 = require("./animal_type.service");
const create_animal_type_dto_1 = require("./dto/create-animal_type.dto");
const update_animal_type_dto_1 = require("./dto/update-animal_type.dto");
const swagger_1 = require("@nestjs/swagger");
let AnimalTypeController = exports.AnimalTypeController = class AnimalTypeController {
    constructor(animalTypeService) {
        this.animalTypeService = animalTypeService;
    }
    create(createAnimalTypeDto) {
        return this.animalTypeService.create(createAnimalTypeDto);
    }
    findAll() {
        return this.animalTypeService.findAll();
    }
    findOne(id) {
        return this.animalTypeService.findOne(id);
    }
    update(id, updateAnimalTypeDto) {
        return this.animalTypeService.update(id, updateAnimalTypeDto);
    }
    remove(id) {
        return this.animalTypeService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create animal-type' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_animal_type_dto_1.CreateAnimalTypeDto]),
    __metadata("design:returntype", void 0)
], AnimalTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all animal-types' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnimalTypeController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get animal-type by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnimalTypeController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update animal-type by id' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_animal_type_dto_1.UpdateAnimalTypeDto]),
    __metadata("design:returntype", void 0)
], AnimalTypeController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete animal-type by id' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnimalTypeController.prototype, "remove", null);
exports.AnimalTypeController = AnimalTypeController = __decorate([
    (0, swagger_1.ApiTags)('Animal-type'),
    (0, common_1.Controller)('animal-type'),
    __metadata("design:paramtypes", [animal_type_service_1.AnimalTypeService])
], AnimalTypeController);
//# sourceMappingURL=animal_type.controller.js.map