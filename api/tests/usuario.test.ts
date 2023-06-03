import User from '../src/core/user/user';

describe('como usuario', () => {
    it('should create an user with required name and email', () => {
        const sut: User = new User('any name', 'any email');

        expect(sut.name).toStrictEqual('any name');
        expect(sut.email).toStrictEqual('any email');
    });
});
