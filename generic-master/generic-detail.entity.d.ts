import { BaseEntity } from 'typeorm';
import { GenericHeader } from './generic-header.entity';
import { DataGm_Status } from './gm.enum';
export declare class GenericDetail extends BaseEntity {
    id: number;
    header: GenericHeader;
    code: string;
    description: string;
    status: DataGm_Status;
    flag: string;
}
