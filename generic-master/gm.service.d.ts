import { UpdateGmDto } from './dto/update.gm.dto';
import { GetFilterGmDto } from './dto/get-filter.gm.dto';
import { CreateGmDto } from './dto/create.gm.dto';
import { GenericRepository } from './generic.repository';
import { GenericHeader } from './generic-header.entity';
import { User } from '../auth/user.entity';
export declare class GmService {
    private repository;
    constructor(repository: GenericRepository);
    get(filterDto: GetFilterGmDto, user: User): Promise<GenericHeader[]>;
    create(dto: CreateGmDto, user: User): Promise<GenericHeader>;
    getById(id: number): Promise<GenericHeader>;
    getByCode(code: string): Promise<GenericHeader>;
    delete(id: number): Promise<void>;
    update(dto: UpdateGmDto, user: User): Promise<GenericHeader>;
}
