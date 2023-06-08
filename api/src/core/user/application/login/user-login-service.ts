import Hasher from '../../domain/contract/hasher';
import InvalidUserCredentialException from '../../domain/exception/invalid-user-credential-exception';
import User from '../../domain/model/user';
import UserRepository from '../../domain/repository/user-repository';
import Email from '../../domain/valueobject/email';
import UserLoginRequest from './user-login-request';
import UserLoginResponse from './user-login-response';

class UserLoginService {
    constructor(
        private readonly repository: UserRepository,
        private readonly hasher: Hasher
    ) {}

    execute(request: UserLoginRequest): UserLoginResponse {
        const model: User = this.repository.getByEmail(
            new Email(request.email)
        );

        this.validateHashOrThrowException(
            model.password.value,
            request.password
        );

        return new UserLoginResponse('any value');
    }

    private validateHashOrThrowException(
        hashedPassword: string,
        plainPassword: string
    ): void {
        const isEquals: boolean = this.hasher.equals(
            hashedPassword,
            plainPassword
        );
        if (isEquals === false) {
            throw new InvalidUserCredentialException();
        }
    }
}

export default UserLoginService;
