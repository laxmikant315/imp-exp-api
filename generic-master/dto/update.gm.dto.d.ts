import { DataGm_Status } from '../gm.enum';
import { GenericDetail } from '../generic-detail.entity';
export declare class UpdateGmDto {
    code: string;
    id: number;
    description: string;
    status: DataGm_Status;
    details: GenericDetail[];
}
