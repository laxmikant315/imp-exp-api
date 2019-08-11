import { AuthCredentialsDto } from './dto/auto-credentials.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    signUp(body: AuthCredentialsDto): Promise<void>;
    signIn(body: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
