import UserRegisterRequest from '../../../../../src/core/application/register/user-register-request';
import UserRegisterService from '../../../../../src/core/application/register/user-register-service';
import UserMother from '../../../../mother/user.mother';

describe('register user service', () => {
    it('should create an user', () => {
        const request: UserRegisterRequest = UserMother.UserRegisterRequest();

        const sut: UserRegisterService = new UserRegisterService();

        expect(() => {
            sut.execute(request);
        }).not.toThrow();
    });
});
