import InvalidUserPasswordException from '../src/core/domain/exception/invalid-user-password-exception';
import Name from '../src/core/user/name';
import UserMother from './mother/user.mother';

describe('password', () => {
    it(`should create with valid value, only letters ${Name.MINIMUM_LENGTH}-${Name.MAXIMUM_LENGTH} chars`, () => {
        expect(() => {
            UserMother.Password();
        }).not.toThrow();
    });

    it('should throw an error on empty value', () => {
        expect(() => {
            UserMother.PasswordEmpty();
        }).toThrowError(InvalidUserPasswordException);
    });

    it('should throw an error on short value', () => {
        expect(() => {
            UserMother.PasswordTooShort();
        }).toThrowError(InvalidUserPasswordException);
    });

    it('should throw an error on long value', () => {
        expect(() => {
            UserMother.PasswordTooLong();
        }).toThrowError(InvalidUserPasswordException);
    });
});
