import TokenHasher from '../../domain/contract/token.hasher';
import jwt from 'jsonwebtoken';

class TokenHasherJwt implements TokenHasher {
    constructor(private readonly privateKey: string) {}

    encode(payload: object, expiresInHours: number = 1): string {
        const token = jwt.sign(payload, this.privateKey, {
            expiresIn: expiresInHours + 'h',
        });

        return token;
    }

    decode(token: string): any {
        const decoded = jwt.decode(token, { complete: true });

        return decoded?.payload ? decoded.payload : {};
    }

    isValid(token: string): boolean {
        try {
            jwt.verify(token, this.privateKey);

            return true;
        } catch (err: any) {
            return false;
        }
    }
}

export default TokenHasherJwt;
