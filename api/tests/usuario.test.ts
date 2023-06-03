import User from '../src/core/user/user';

describe('user model', () => {
    it('should create with name and email', () => {
        const name = 'any name';
        const email = 'any email';
        const sut: User = new User(name, email);

        expect(sut.name).toStrictEqual(name);
        expect(sut.email).toStrictEqual(email);
    });
});
