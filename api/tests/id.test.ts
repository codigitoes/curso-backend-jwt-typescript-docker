import InvalidUserIdException from '../src/core/domain/exception/invalid-user-id-exception';
import Id from '../src/core/user/id';
import UserMother from './mother/user.mother';

describe('id', () => {
    it('should create with valid value, uuid v4', () => {
        const sut: Id = UserMother.Id();

        expect(sut.value).toHaveLength(Id.FIXED_LENGTH);
    });

    it('should validate uuid v4 values statically', () => {
        expect(Id.isValid('55d35e50-3b2e-45b4-b40a-66936bb70cb0')).toBeTruthy();
        expect(Id.isValid('0c566c64-d82c-4496-8420-a653363a11dc')).toBeTruthy();
        expect(Id.isValid('55d35e50-3b2e-45b4-b40a-66936bb70cb')).toBeFalsy();
        expect(Id.isValid('a'.repeat(Id.FIXED_LENGTH))).toBeFalsy();
    });

    it('should create random statically', () => {
        expect(Id.random()).toBeInstanceOf(Id);
    });

    it('should throw an error on invalid value, not a uuid v4', () => {
        expect(() => {
            UserMother.IdEmpty();
        }).toThrowError(InvalidUserIdException);

        expect(() => {
            UserMother.Id('non valid uuid v4');
        }).toThrowError(InvalidUserIdException);

        expect(() => {
            UserMother.Id('55d35e50_3b2e-45b4-b40a-66936bb70cb0');
        }).toThrowError(InvalidUserIdException);

        expect(() => {
            UserMother.Id('a'.repeat(Id.FIXED_LENGTH - 1));
        }).toThrowError(InvalidUserIdException);

        expect(() => {
            UserMother.Id('a'.repeat(Id.FIXED_LENGTH + 1));
        }).toThrowError(InvalidUserIdException);
    });
});
