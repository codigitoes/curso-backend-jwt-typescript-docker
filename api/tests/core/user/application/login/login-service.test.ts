import UserLoginService from '../../../../../src/core/application/login/user-login-service';
import Hasher from '../../../../../src/core/domain/contract/hasher';
import User from '../../../../../src/core/domain/model/user';
import UserRepository from '../../../../../src/core/domain/repository/user-repository';
import UserMother from '../../../../mother/user.mother';
import HasherImp from '../hasher-imp';
import UserRepositoryInMemory from '../user-repository-in-memory';

const repository: UserRepository = new UserRepositoryInMemory();
const hasher: Hasher = new HasherImp();

const getService = () => {
    return new UserLoginService(repository, hasher);
};

describe('login user service', () => {
    it('should result true on user exists', () => {
        const user: User = UserMother.User();
        const email: string = user.email.value;
        const password: string = user.password.value;
        repository.create(user);

        const sut: UserLoginService = getService();
        const result: boolean = sut.execute(
            UserMother.UserLoginRequest(email, password)
        );

        expect(result).toBeTruthy();
        expect(
            (repository as UserRepositoryInMemory).getHaveBeenCalled()
        ).toBeTruthy();
    });
});
