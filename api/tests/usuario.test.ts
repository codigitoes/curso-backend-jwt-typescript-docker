import Email from '../src/core/user/email';
import Name from '../src/core/user/name';
import User from '../src/core/user/user';
import UserMother from './mother/user.mother';

describe('user model', () => {
    it('should create with name and email as value object', () => {
        const sut: User = UserMother.User();

        expect(sut.name).toBeInstanceOf(Name);
        expect(sut.email).toBeInstanceOf(Email);
    });
});
