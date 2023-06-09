import UserLoginResponse from '../../../../../src/core/user/application/login/user-login-response';
import UserLoginService from '../../../../../src/core/user/application/login/user-login-service';
import Hasher from '../../../../../src/core/user/domain/contract/hasher';
import InvalidUserCredentialException from '../../../../../src/core/user/domain/exception/invalid-user-credential-exception';
import User from '../../../../../src/core/user/domain/model/user';
import UserRepository from '../../../../../src/core/user/domain/repository/user-repository';
import UserMother from '../../../../mother/user.mother';
import HasherImp from '../hasher-imp';
import UserRepositoryInMemory from '../../infrastructure/repository/user-repository-in-memory';

const repository: UserRepository = new UserRepositoryInMemory();
const hasher: Hasher = new HasherImp();

const getService = () => {
    return new UserLoginService(repository, hasher);
};

describe('login user service', () => {
    it('should result a login response on login success', async () => {
        const user: User = UserMother.User();
        const email: string = user.email.value;
        const password: string = user.password.value;
        repository.create(user);

        const sut: UserLoginService = getService();
        const result: UserLoginResponse = await sut.execute(
            UserMother.UserLoginRequest(email, password)
        );

        expect(result.token).toBeDefined();
        expect(
            (repository as UserRepositoryInMemory).getHaveBeenCalled()
        ).toBeTruthy();
        expect((hasher as HasherImp).equalsHaveBeenCalled()).toBeTruthy();
    });

    it('should throw invalid user credentials on login failed ', async () => {
        const user: User = UserMother.User();
        const email: string = user.email.value;
        repository.create(user);

        const sut: UserLoginService = getService();

        try {
            await sut.execute(
                UserMother.UserLoginRequest(email, 'any other password')
            );
        } catch (error) {
            expect(error).toBeInstanceOf(InvalidUserCredentialException);
        }
    });
});
