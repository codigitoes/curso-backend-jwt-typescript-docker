import Name from '../src/core/user/name';

describe('name', () => {
    it('should create with valid value, only letters 3-25 chars', () => {
        const name = 'any name';
        const sut: Name = new Name(name);

        expect(sut.value).toStrictEqual(name);
    });

    it('should throw an error on empty value', () => {
        expect(() => {
            new Name('');
        }).toThrow();
    });

    it('should throw an error on short value', () => {
        expect(() => {
            new Name('a'.repeat(Name.MINIMUM_LENGTH - 1));
        }).toThrow();
    });

    it('should throw an error on long value', () => {
        expect(() => {
            new Name('a'.repeat(Name.MAXIMUM_LENGTH + 1));
        }).toThrow();
    });

    it('should throw an error on wrong format, valid its only letters spaces', () => {
        expect(() => {
            new Name('123456789');
        }).toThrow();
    });

    it('should throw an error on wrong format, valid its only letters spaces', () => {
        expect(() => {
            new Name('     s     s    ');
        }).toThrow();
    });

    it('should throw an error on wrong format, valid its only letters spaces', () => {
        new Name('s     s    s');

        expect(true).toBeTruthy();
    });
});
