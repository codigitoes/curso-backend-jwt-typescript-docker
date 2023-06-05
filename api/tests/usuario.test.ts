import Email from '../src/core/user/email';
import Id from '../src/core/user/id';
import Name from '../src/core/user/name';
import Password from '../src/core/user/password';
import User from '../src/core/user/user';
import UserMother from './mother/user.mother';

describe('user model', () => {
    it('should create with name email and password as value object', () => {
        const sut: User = UserMother.User();

        expect(sut.id).toBeInstanceOf(Id);
        expect(sut.name).toBeInstanceOf(Name);
        expect(sut.email).toBeInstanceOf(Email);
        expect(sut.password).toBeInstanceOf(Password);
    });
});
