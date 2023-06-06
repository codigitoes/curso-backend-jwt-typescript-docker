import User from '../../domain/model/user';
import UserRepository from '../../domain/repository/user-repository';
import Email from '../../domain/valueobject/email';
import Id from '../../domain/valueobject/id';
import Name from '../../domain/valueobject/name';
import Password from '../../domain/valueobject/password';
import UserRegisterRequest from './user-register-request';

class UserRegisterService {
    constructor(private readonly repository: UserRepository) {}

    execute(request: UserRegisterRequest): void {
        const model: User = new User(
            new Id(request.id),
            new Name(request.name),
            new Email(request.email),
            new Password(request.password)
        );
        this.repository.create(model);
    }
}

export default UserRegisterService;
