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
const common_1 = require("@nestjs/common");
const gm_service_1 = require("./gm.service");
const create_gm_dto_1 = require("./dto/create.gm.dto");
const get_filter_gm_dto_1 = require("./dto/get-filter.gm.dto");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const user_entity_1 = require("../auth/user.entity");
const update_gm_dto_1 = require("./dto/update.gm.dto");
let GmController = class GmController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger('GmController');
    }
    get(filterDto, user) {
        this.logger.verbose(`User ${user.username} is retriving all records. Filter : ${JSON.stringify(filterDto)}`);
        return this.service.get(filterDto, user);
    }
    getByCode(code, user) {
        this.logger.verbose(`User ${user.username} is retriving record. CODE : ${code}`);
        return this.service.getByCode(code);
    }
    create(dto, user) {
        this.logger.verbose(`User ${user.username} is creating new record. Data : ${JSON.stringify(dto)}`);
        return this.service.create(dto, user);
    }
    delete(id, user) {
        this.logger.verbose(`User ${user.username} is deleting the record. ID : ${id}}`);
        return this.service.delete(id);
    }
    update(id, user, dto) {
        this.logger.verbose(`User ${user.username} is updateing the record. ID : ${id} , Data: ${dto}}`);
        return this.service.update(dto, user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_filter_gm_dto_1.GetFilterGmDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], GmController.prototype, "get", null);
__decorate([
    common_1.Get('/:code'),
    __param(0, common_1.Param('code')),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], GmController.prototype, "getByCode", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gm_dto_1.CreateGmDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], GmController.prototype, "create", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], GmController.prototype, "delete", null);
__decorate([
    common_1.Patch('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User,
        update_gm_dto_1.UpdateGmDto]),
    __metadata("design:returntype", void 0)
], GmController.prototype, "update", null);
GmController = __decorate([
    common_1.Controller('generic-master'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [gm_service_1.GmService])
], GmController);
exports.GmController = GmController;
//# sourceMappingURL=gm.controller.js.map