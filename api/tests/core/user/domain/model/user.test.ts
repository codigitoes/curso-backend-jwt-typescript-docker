import Email from '../../../../../src/core/domain/valueobject/email';
import User from '../../../../../src/core/domain/model/user';
import UserMother from '../../../../mother/user.mother';
import Name from '../../../../../src/core/domain/valueobject/name';
import Password from '../../../../../src/core/domain/valueobject/password';
import Id from '../../../../../src/core/domain/valueobject/id';

describe('user model', () => {
    it('should create with id name email and password as value object', () => {
        const sut: User = UserMother.User();

        expect(sut.id).toBeInstanceOf(Id);
        expect(sut.name).toBeInstanceOf(Name);
        expect(sut.email).toBeInstanceOf(Email);
        expect(sut.password).toBeInstanceOf(Password);
    });
});
