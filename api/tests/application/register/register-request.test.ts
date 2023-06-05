import UserRegisterRequest from '../../../src/core/application/register/user-register-request';
import UserMother from '../../mother/user.mother';

describe('register user request', () => {
    it('should create an user', () => {
        const sut: UserRegisterRequest = UserMother.UserRegisterRequest();

        expect(sut.name).toBeDefined();
        expect(sut.email).toBeDefined();
        expect(sut.password).toBeDefined();
    });
});