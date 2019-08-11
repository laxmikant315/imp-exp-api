import { BaseEntity } from 'typeorm';
import { DataGm_Status } from './gm.enum';
import { GenericDetail } from './generic-detail.entity';
export declare class GenericHeader extends BaseEntity {
    id: number;
    code: string;
    description: string;
    status: DataGm_Status;
    details: GenericDetail[];
}
