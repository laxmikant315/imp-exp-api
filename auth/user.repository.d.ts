import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auto-credentials.dto';
export declare class UserRepository extends Repository<User> {
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    private hashPassword;
    validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string>;
}
