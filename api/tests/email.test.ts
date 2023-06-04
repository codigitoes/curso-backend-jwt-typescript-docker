import Email from '../src/core/user/email';

describe('email', () => {
    it('should create with valid email value', () => {
        expect(() => {
            new Email('email@email.com');
            new Email('1email@1email.co');
            new Email('email@email.abcdb');
            new Email('12345@mi12345.com');
            new Email('example@email.co.jp');
        }).not.toThrow();
    });

    it('should throw error on non valid email', () => {
        expect(() => {
            new Email('@email.com');
        }).toThrow();
        expect(() => {
            new Email('email@email.');
        }).toThrow();
        expect(() => {
            new Email('@email.com');
        }).toThrow();
        expect(() => {
            new Email('email@@email.com');
        }).toThrow();
    });
});
