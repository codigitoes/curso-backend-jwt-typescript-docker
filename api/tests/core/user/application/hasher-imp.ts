import Hasher from '../../../../src/core/domain/contract/hasher';

class HasherImp implements Hasher {
    private hashCalled: boolean = false;

    hashHaveBeenCalled(): boolean {
        const result: boolean = this.hashCalled;

        this.hashCalled = false;

        return result;
    }

    hash(unhashed: string): string {
        this.hashCalled = true;
        unhashed;

        return unhashed;
    }

    equals(unhashed: string, hashed: string): boolean {
        this.hashCalled = false;
        unhashed;
        hashed;
        return true;
    }
}

export default HasherImp;
