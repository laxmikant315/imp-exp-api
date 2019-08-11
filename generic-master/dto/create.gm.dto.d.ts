import { DataGm_Status } from '../gm.enum';
import { GenericDetail } from '../generic-detail.entity';
export declare class CreateGmDto {
    code: string;
    status: DataGm_Status;
    description: string;
    details: GenericDetail[];
}
