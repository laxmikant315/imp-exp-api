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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const generic_repository_1 = require("./generic.repository");
const typeorm_1 = require("@nestjs/typeorm");
const generic_detail_entity_1 = require("./generic-detail.entity");
let GmService = class GmService {
    constructor(repository) {
        this.repository = repository;
    }
    get(filterDto, user) {
        return this.repository.getGenerics(filterDto, user);
    }
    create(dto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.createGeneric(dto, user);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const found = yield this.repository.findOne(id, { relations: ['details'] });
            if (!found) {
                throw new common_1.NotFoundException(`Generic with ID ${id} not found.`);
            }
            return found;
        });
    }
    getByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const found = yield this.repository.findOne({
                where: { code },
                relations: ['details'],
            });
            if (!found) {
                throw new common_1.NotFoundException(`Generic with Code ${code} not found.`);
            }
            return found;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const found = yield this.repository.findOne(id, { relations: ['details'] });
            if (found) {
                for (const x of found.details) {
                    yield x.remove();
                }
                const result = yield this.repository.delete(id);
            }
            else {
                throw new common_1.NotFoundException(`Generic with ID ${id} not found.`);
            }
        });
    }
    update(dto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.getById(dto.id);
            item.status = dto.status;
            item.description = dto.description;
            item.code = dto.code;
            yield item.save();
            if (dto.details && dto.details.length > 0) {
                for (const detail of dto.details) {
                    const found = item.details.find(x => (x.id === detail.id));
                    if (found) {
                        if (detail.flag === 'D') {
                            yield found.remove();
                        }
                        else {
                            found.code = detail.code;
                            found.status = detail.status;
                            found.description = detail.description;
                            yield found.save();
                        }
                    }
                    else {
                        const newDetail = new generic_detail_entity_1.GenericDetail();
                        newDetail.code = detail.code;
                        newDetail.status = detail.status;
                        newDetail.description = detail.description;
                        newDetail.header = item;
                        yield newDetail.save();
                    }
                }
            }
            return item;
        });
    }
};
GmService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(generic_repository_1.GenericRepository)),
    __metadata("design:paramtypes", [generic_repository_1.GenericRepository])
], GmService);
exports.GmService = GmService;
//# sourceMappingURL=gm.service.js.map