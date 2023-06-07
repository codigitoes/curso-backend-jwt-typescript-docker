import UserRegisterService from '../../../../../src/core/application/register/user-register-service';
import Hasher from '../../../../../src/core/domain/contract/hasher';
import InvalidUserEmailException from '../../../../../src/core/domain/exception/invalid-user-email-exception';
import InvalidUserIdException from '../../../../../src/core/domain/exception/invalid-user-id-exception';
import InvalidUserNameException from '../../../../../src/core/domain/exception/invalid-user-name-exception';
import InvalidUserPasswordException from '../../../../../src/core/domain/exception/invalid-user-password-exception';
import UserRepository from '../../../../../src/core/domain/repository/user-repository';
import UserMother from '../../../../mother/user.mother';
import HasherImp from '../hasher-imp';
import UserRepositoryInMemory from '../user-repository-in-memory';

const repository: UserRepository = new UserRepositoryInMemory();
const hasher: Hasher = new HasherImp();

const getService = () => {
    return new UserRegisterService(repository, hasher);
};

describe('register user service', () => {
    it('should create an user', () => {
        const sut: UserRegisterService = getService();
        sut.execute(UserMother.UserRegisterRequest());

        expect(
            (repository as UserRepositoryInMemory).createHaveBeenCalled()
        ).toBeTruthy();
        expect((hasher as HasherImp).hashHaveBeenCalled()).toBeTruthy();
    });

    it('should throw an invalid user id on empty id', () => {
        const sut: UserRegisterService = getService();

        expect(() => {
            sut.execute(UserMother.UserRegisterRequest(''));
        }).toThrow(InvalidUserIdException);
    });

    it('should throw an invalid user name on empty name', () => {
        const sut: UserRegisterService = getService();

        expect(() => {
            sut.execute(UserMother.UserRegisterRequest(undefined, ''));
        }).toThrow(InvalidUserNameException);
    });

    it('should throw an invalid user email on empty email', () => {
        const sut: UserRegisterService = getService();

        expect(() => {
            sut.execute(
                UserMother.UserRegisterRequest(undefined, undefined, '')
            );
        }).toThrow(InvalidUserEmailException);
    });

    it('should throw an invalid user password on empty password', () => {
        const sut: UserRegisterService = getService();

        expect(() => {
            sut.execute(
                UserMother.UserRegisterRequest(
                    undefined,
                    undefined,
                    undefined,
                    ''
                )
            );
        }).toThrow(InvalidUserPasswordException);
    });
});
