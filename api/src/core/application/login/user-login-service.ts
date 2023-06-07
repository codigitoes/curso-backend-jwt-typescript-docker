import Hasher from '../../domain/contract/hasher';
import User from '../../domain/model/user';
import UserRepository from '../../domain/repository/user-repository';
import Email from '../../domain/valueobject/email';
import UserLoginRequest from './user-login-request';

class UserLoginService {
    constructor(
        private readonly repository: UserRepository,
        private readonly hasher: Hasher
    ) {}

    execute(request: UserLoginRequest): boolean {
        const model: User = this.repository.getByEmail(
            new Email(request.email)
        );

        const hashedPassword: string = model.password.value;
        const plainPassword: string = request.password;

        return this.hasher.equals(plainPassword, hashedPassword);
    }
}

export default UserLoginService;
