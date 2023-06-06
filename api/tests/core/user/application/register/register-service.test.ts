import UserRegisterRequest from '../../../../../src/core/application/register/user-register-request';
import UserRegisterService from '../../../../../src/core/application/register/user-register-service';
import InvalidUserEmailException from '../../../../../src/core/domain/exception/invalid-user-email-exception';
import InvalidUserIdException from '../../../../../src/core/domain/exception/invalid-user-id-exception';
import InvalidUserNameException from '../../../../../src/core/domain/exception/invalid-user-name-exception';
import InvalidUserPasswordException from '../../../../../src/core/domain/exception/invalid-user-password-exception';
import User from '../../../../../src/core/domain/model/user';
import UserRepository from '../../../../../src/core/domain/repository/user-repository';
import UserMother from '../../../../mother/user.mother';

class UserRepositoryImp implements UserRepository {
    private createCalled: boolean = false;

    create(model: User): void {
        this.createCalled = true;
    }

    createHaveBeenCalled(): boolean {
        const result: boolean = this.createCalled;

        this.createCalled = false;

        return result;
    }
}
const repository: UserRepository = new UserRepositoryImp();

describe('register user service', () => {
    it('should create an user', () => {
        const request: UserRegisterRequest = UserMother.UserRegisterRequest();

        const sut: UserRegisterService = new UserRegisterService(repository);
        sut.execute(request);

        expect(
            (repository as UserRepositoryImp).createHaveBeenCalled()
        ).toBeTruthy();
    });

    it('should throw an invalid user id on empty id', () => {
        const request: UserRegisterRequest = UserMother.UserRegisterRequest('');

        const sut: UserRegisterService = new UserRegisterService(repository);

        expect(() => {
            sut.execute(request);
        }).toThrow(InvalidUserIdException);
    });

    it('should throw an invalid user name on empty name', () => {
        const request: UserRegisterRequest = UserMother.UserRegisterRequest(
            undefined,
            ''
        );

        const sut: UserRegisterService = new UserRegisterService(repository);

        expect(() => {
            sut.execute(request);
        }).toThrow(InvalidUserNameException);
    });

    it('should throw an invalid user email on empty email', () => {
        const request: UserRegisterRequest = UserMother.UserRegisterRequest(
            undefined,
            undefined,
            ''
        );

        const sut: UserRegisterService = new UserRegisterService(repository);

        expect(() => {
            sut.execute(request);
        }).toThrow(InvalidUserEmailException);
    });

    it('should throw an invalid user password on empty password', () => {
        const request: UserRegisterRequest = UserMother.UserRegisterRequest(
            undefined,
            undefined,
            undefined,
            ''
        );

        const sut: UserRegisterService = new UserRegisterService(repository);

        expect(() => {
            sut.execute(request);
        }).toThrow(InvalidUserPasswordException);
    });
});
