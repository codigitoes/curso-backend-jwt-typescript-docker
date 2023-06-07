import UserLoginRequest from '../../../../../src/core/application/login/user-login-request';
import UserMother from '../../../../mother/user.mother';

describe('login user request', () => {
    it('should have email and password', () => {
        const sut: UserLoginRequest = UserMother.UserLoginRequest();

        expect(sut.email).toBeDefined();
        expect(sut.password).toBeDefined();
    });
});
