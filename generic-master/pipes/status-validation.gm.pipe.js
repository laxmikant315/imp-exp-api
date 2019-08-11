"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const gm_enum_1 = require("../gm.enum");
class StatusValidationPipe {
    constructor() {
        this.allowedStatuses = [gm_enum_1.DataGm_Status.ACTIVE, gm_enum_1.DataGm_Status.INACTIVE];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} is an invalid status.`);
        }
        return value;
    }
    isStatusValid(status) {
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}
exports.StatusValidationPipe = StatusValidationPipe;
//# sourceMappingURL=status-validation.gm.pipe.js.map