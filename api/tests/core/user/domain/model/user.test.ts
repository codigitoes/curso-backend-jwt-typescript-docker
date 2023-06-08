import User from '../../../../../src/core/user/domain/model/user';
import Email from '../../../../../src/core/user/domain/valueobject/email';
import Id from '../../../../../src/core/user/domain/valueobject/id';
import Name from '../../../../../src/core/user/domain/valueobject/name';
import Password from '../../../../../src/core/user/domain/valueobject/password';
import UserMother from '../../../../mother/user.mother';

describe('user model', () => {
    it('should create with id name email and password as value object', () => {
        const sut: User = UserMother.User();

        expect(sut.id).toBeInstanceOf(Id);
        expect(sut.name).toBeInstanceOf(Name);
        expect(sut.email).toBeInstanceOf(Email);
        expect(sut.password).toBeInstanceOf(Password);
    });
});
