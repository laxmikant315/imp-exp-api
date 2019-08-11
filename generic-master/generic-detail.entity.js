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
const typeorm_1 = require("typeorm");
const generic_header_entity_1 = require("./generic-header.entity");
const gm_enum_1 = require("./gm.enum");
let GenericDetail = class GenericDetail extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GenericDetail.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => generic_header_entity_1.GenericHeader, header => header.id),
    __metadata("design:type", generic_header_entity_1.GenericHeader)
], GenericDetail.prototype, "header", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GenericDetail.prototype, "code", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GenericDetail.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GenericDetail.prototype, "status", void 0);
GenericDetail = __decorate([
    typeorm_1.Entity()
], GenericDetail);
exports.GenericDetail = GenericDetail;
//# sourceMappingURL=generic-detail.entity.js.map