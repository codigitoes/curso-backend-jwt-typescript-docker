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
        }).toThrow();
    });

    it('should throw an error on short value', () => {
        expect(() => {
            UserMother.PasswordTooShort();
        }).toThrow();
    });

    it('should throw an error on long value', () => {
        expect(() => {
            UserMother.PasswordTooLong();
        }).toThrow();
    });
});
