import Hasher from '../../domain/contract/hasher';
import bcrypt from 'bcrypt';

class HasherBCrypt implements Hasher {
    private SALT_ROUNDS: number = 10;

    hash(unhashed: string): string {
        const salt = bcrypt.genSaltSync(this.SALT_ROUNDS);

        return bcrypt.hashSync(unhashed, salt);
    }

    equals(unhashed: string, hashed: string): boolean {
        return bcrypt.compareSync(unhashed, hashed);
    }
}

export default HasherBCrypt;
