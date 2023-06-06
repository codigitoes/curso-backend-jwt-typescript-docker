import Hasher from '../../../../../src/core/domain/contract/hasher';
import HasherBCrypt from '../../../../../src/core/infrastructure/helper/hasher.bcrypt';

describe('bcrypt hasher implementation', () => {
    it('should hash a plain string', () => {
        const sut: Hasher = new HasherBCrypt();

        const hashed: string = sut.hash('any value');

        expect(hashed.length).toBeGreaterThan('any value'.length);
    });

    it('should compare an unhashed string with a hashed string', () => {
        const sut: Hasher = new HasherBCrypt();

        const hashed: string = sut.hash('any value');
        const isEquals: boolean = sut.equals('any value', hashed);

        expect(isEquals).toBeTruthy();
    });
});
