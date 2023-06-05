import InvalidUserIdException from '../../../../../src/core/domain/exception/invalid-user-id-exception';
import Id from '../../../../../src/core/domain/valueobject/id';
import UserMother from '../../../../mother/user.mother';

const VALID_UUID_V4 = '2a89bdf7-af55-485d-8e51-32fdbbccd35e';

describe('id', () => {
    it('should create with valid value, must be an uuid v4', () => {
        expect(() => {
            UserMother.Id(VALID_UUID_V4);
        }).not.toThrow();
    });

    it('should create a random id statically', () => {
        expect(() => {
            Id.random();
        }).not.toThrow();
    });

    it('should throw a custom exception on empty value', () => {
        expect(() => {
            UserMother.IdEmpty();
        }).toThrow(InvalidUserIdException);
    });

    it('should throw a custom exception on not valid uuid v4 value', () => {
        expect(() => {
            UserMother.IdWrongFormat();
        }).toThrow(InvalidUserIdException);
    });

    it('should validate an uuid v4 statically', () => {
        expect(Id.isValid(VALID_UUID_V4)).toBeTruthy();
        expect(Id.isValid('2a89bdf7-af55-485d-8e51-')).toBeFalsy();
        expect(Id.isValid('2a89bdf7-af55-485d-8e51-AAAAAAAAAAAZ')).toBeFalsy();
    });
});
