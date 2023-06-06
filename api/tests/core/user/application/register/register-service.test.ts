import UserRegisterRequest from '../../../../../src/core/application/register/user-register-request';
import UserRegisterService from '../../../../../src/core/application/register/user-register-service';
import Hasher from '../../../../../src/core/domain/contract/hasher';
import InvalidUserEmailException from '../../../../../src/core/domain/exception/invalid-user-email-exception';
import InvalidUserIdException from '../../../../../src/core/domain/exception/invalid-user-id-exception';
import InvalidUserNameException from '../../../../../src/core/domain/exception/invalid-user-name-exception';
import InvalidUserPasswordException from '../../../../../src/core/domain/exception/invalid-user-password-exception';
import User from '../../../../../src/core/domain/model/user';
import UserRepository from '../../../../../src/core/domain/repository/user-repository';
import UserMother from '../../../../mother/user.mother';

class UserRepositoryImp implements UserRepository {
    private createCalled: boolean = false;
    private model: User | null = null;

    create(model: User): void {
        this.model = model;
        this.createCalled = true;
    }

    createHaveBeenCalled(): boolean {
        const result: boolean = this.createCalled;

        this.createCalled = false;

        return result;
    }
}
const repository: UserRepository = new UserRepositoryImp();

class HasherImp implements Hasher {
    private hashCalled: boolean = false;

    hashHaveBeenCalled(): boolean {
        const result: boolean = this.hashCalled;

        this.hashCalled = false;

        return result;
    }

    hash(unhashed: string): string {
        this.hashCalled = true;
        unhashed;

        return unhashed;
    }

    equals(unhashed: string, hashed: string): boolean {
        this.hashCalled = false;
        unhashed;
        hashed;
        return false;
    }
}
const hasher: Hasher = new HasherImp();

const getService = () => {
    return new UserRegisterService(repository, hasher);
};

describe('register user service', () => {
    it('should create an user', () => {
        const request: UserRegisterRequest = UserMother.UserRegisterRequest();

        const sut: UserRegisterService = getService();
        sut.execute(request);

        expect(
            (repository as UserRepositoryImp).createHaveBeenCalled()
        ).toBeTruthy();
        expect((hasher as HasherImp).hashHaveBeenCalled()).toBeTruthy();
    });

    it('should throw an invalid user id on empty id', () => {
        const request: UserRegisterRequest = UserMother.UserRegisterRequest('');

        const sut: UserRegisterService = getService();

        expect(() => {
            sut.execute(request);
        }).toThrow(InvalidUserIdException);
    });

    it('should throw an invalid user name on empty name', () => {
        const request: UserRegisterRequest = UserMother.UserRegisterRequest(
            undefined,
            ''
        );

        const sut: UserRegisterService = getService();

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

        const sut: UserRegisterService = getService();

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

        const sut: UserRegisterService = getService();

        expect(() => {
            sut.execute(request);
        }).toThrow(InvalidUserPasswordException);
    });
});
