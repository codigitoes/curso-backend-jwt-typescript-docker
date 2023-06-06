import Hasher from '../../domain/contract/hasher';
import User from '../../domain/model/user';
import UserRepository from '../../domain/repository/user-repository';
import Email from '../../domain/valueobject/email';
import Id from '../../domain/valueobject/id';
import Name from '../../domain/valueobject/name';
import Password from '../../domain/valueobject/password';
import UserRegisterRequest from './user-register-request';

class UserRegisterService {
    constructor(
        private readonly repository: UserRepository,
        private readonly hasher: Hasher
    ) {}

    execute(request: UserRegisterRequest): void {
        const hashedPassword = this.hasher.hash(request.password);
        const model: User = new User(
            new Id(request.id),
            new Name(request.name),
            new Email(request.email),
            new Password(hashedPassword)
        );
        this.repository.create(model);
    }
}

export default UserRegisterService;
