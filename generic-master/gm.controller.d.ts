import { GmService } from './gm.service';
import { GenericHeader } from './generic-header.entity';
import { CreateGmDto } from './dto/create.gm.dto';
import { GetFilterGmDto } from './dto/get-filter.gm.dto';
import { User } from '../auth/user.entity';
import { UpdateGmDto } from './dto/update.gm.dto';
export declare class GmController {
    private service;
    private logger;
    constructor(service: GmService);
    get(filterDto: GetFilterGmDto, user: User): Promise<GenericHeader[]>;
    getByCode(code: string, user: User): Promise<GenericHeader>;
    create(dto: CreateGmDto, user: User): Promise<GenericHeader>;
    delete(id: number, user: User): Promise<void>;
    update(id: number, user: User, dto: UpdateGmDto): Promise<GenericHeader>;
}
