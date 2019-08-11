import { Repository } from 'typeorm';
import { GenericHeader } from './generic-header.entity';
import { CreateGmDto } from './dto/create.gm.dto';
import { User } from '../auth/user.entity';
import { GetFilterGmDto } from './dto/get-filter.gm.dto';
export declare class GenericRepository extends Repository<GenericHeader> {
    private logger;
    getGenerics(filterDto: GetFilterGmDto, user: User): Promise<GenericHeader[]>;
    createGeneric(dto: CreateGmDto, user: User): Promise<GenericHeader>;
}
