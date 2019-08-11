import { PipeTransform } from '@nestjs/common';
import { DataGm_Status } from '../gm.enum';
export declare class StatusValidationPipe implements PipeTransform {
    readonly allowedStatuses: DataGm_Status[];
    transform(value: any): any;
    private isStatusValid;
}
