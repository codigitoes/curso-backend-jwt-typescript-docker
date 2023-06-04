import Name from '../src/core/user/name';
import UserMother from './mother/user.mother';

describe('name', () => {
    it('should create with valid value, only letters 3-25 chars', () => {
        const name = 'any name';
        const sut: Name = UserMother.Name(name);

        expect(sut.value).toStrictEqual(name);
    });

    it('should throw an error on empty value', () => {
        expect(() => {
            UserMother.NameEmpty();
        }).toThrow();
    });

    it('should throw an error on short value', () => {
        expect(() => {
            UserMother.NameTooShort();
        }).toThrow();
    });

    it('should throw an error on long value', () => {
        expect(() => {
            UserMother.NameTooLong();
        }).toThrow();
    });

    it('should throw an error on wrong format, valid its only letters spaces', () => {
        expect(() => {
            UserMother.Name('123456789');
        }).toThrow();
    });

    it('should throw an error on wrong format, valid its only letters spaces', () => {
        expect(() => {
            UserMother.Name('     s     s    ');
        }).toThrow();
    });

    it('should throw an error on wrong format, valid its only letters spaces', () => {
        UserMother.Name('s     s    s');

        expect(true).toBeTruthy();
    });
});
