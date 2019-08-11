"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const typeorm_1 = require("typeorm");
const generic_header_entity_1 = require("./generic-header.entity");
const common_1 = require("@nestjs/common");
const generic_detail_entity_1 = require("./generic-detail.entity");
let GenericRepository = class GenericRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('GenericRepository');
    }
    getGenerics(filterDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status, search } = filterDto;
            const query = this.createQueryBuilder('generic');
            if (status) {
                query.andWhere('generic.status=:status', { status });
            }
            if (search) {
                query.andWhere('(generic.name LIKE :search OR generic.description LIKE :search)', { search: `%${search}%` });
            }
            try {
                return yield query.getMany();
            }
            catch (error) {
                this.logger.error(`Failed to get records for user ${user.username} ,
       Filters: ${JSON.stringify(filterDto)}
      `, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        });
    }
    createGeneric(dto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, description, status } = dto;
            const item = new generic_header_entity_1.GenericHeader();
            item.code = code;
            item.description = description;
            item.status = status;
            try {
                const header = yield item.save();
                dto.details.forEach((x) => __awaiter(this, void 0, void 0, function* () {
                    const detail = new generic_detail_entity_1.GenericDetail();
                    detail.code = x.code;
                    detail.description = x.description;
                    detail.header = header;
                    detail.status = x.status;
                    yield detail.save();
                }));
            }
            catch (error) {
                this.logger.error(`Failed to save record for user ${user.username} ,
       Filters: ${JSON.stringify(dto)}
      `, error.stack);
                throw new common_1.InternalServerErrorException();
            }
            return item;
        });
    }
};
GenericRepository = __decorate([
    typeorm_1.EntityRepository(generic_header_entity_1.GenericHeader)
], GenericRepository);
exports.GenericRepository = GenericRepository;
//# sourceMappingURL=generic.repository.js.map