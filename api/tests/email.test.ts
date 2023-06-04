import UserMother from './mother/user.mother';

describe('email', () => {
    it('should create with valid email value', () => {
        expect(() => {
            UserMother.Email('email@email.com');
            UserMother.Email('1email@1email.co');
            UserMother.Email('email@email.abcdb');
            UserMother.Email('12345@mi12345.com');
            UserMother.Email('example@email.co.jp');
        }).not.toThrow();
    });

    it('should throw error on non valid email', () => {
        expect(() => {
            UserMother.Email('@email.com');
        }).toThrow();
        expect(() => {
            UserMother.Email('email@email.');
        }).toThrow();
        expect(() => {
            UserMother.Email('@email.com');
        }).toThrow();
        expect(() => {
            UserMother.Email('email@@email.com');
        }).toThrow();
    });
});
