import TokenHasher from '../../../../../src/core/user/domain/contract/token.hasher';
import TokenHasherJwt from '../../../../../src/core/user/infrastructure/helper/token.hasher.jwt';

const getTokenHasher = (): TokenHasher => {
    return new TokenHasherJwt('any private key');
};
const payload: object = {
    userId: 'any value',
    otherKey: 'other value',
};

describe('jwt token hasher implementation', () => {
    it('should hash any data as payload', () => {
        const sut: TokenHasher = getTokenHasher();

        const token: string = sut.encode(payload);
        const decoded: any = sut.decode(token);

        expect(decoded.userId).toStrictEqual('any value');
        expect(decoded.otherKey).toStrictEqual('other value');
    });

    it('should validate valid token', () => {
        const sut: TokenHasher = getTokenHasher();

        const token: string = sut.encode(payload);

        expect(sut.isValid(token)).toBeTruthy();
        expect(sut.isValid('wrong token')).toBeFalsy();
        expect(sut.isValid('')).toBeFalsy();
    });
});
