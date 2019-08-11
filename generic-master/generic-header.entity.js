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
const gm_enum_1 = require("./gm.enum");
const generic_detail_entity_1 = require("./generic-detail.entity");
let GenericHeader = class GenericHeader extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GenericHeader.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GenericHeader.prototype, "code", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GenericHeader.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GenericHeader.prototype, "status", void 0);
__decorate([
    typeorm_1.OneToMany(type => generic_detail_entity_1.GenericDetail, detail => detail.header),
    __metadata("design:type", Array)
], GenericHeader.prototype, "details", void 0);
GenericHeader = __decorate([
    typeorm_1.Entity()
], GenericHeader);
exports.GenericHeader = GenericHeader;
//# sourceMappingURL=generic-header.entity.js.map