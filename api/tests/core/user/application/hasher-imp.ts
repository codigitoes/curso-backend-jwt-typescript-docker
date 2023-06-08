import Hasher from '../../../../src/core/user/domain/contract/hasher';

class HasherImp implements Hasher {
    private hashCalled: boolean = false;
    private equalsCalled: boolean = false;

    hashHaveBeenCalled(): boolean {
        const result: boolean = this.hashCalled;

        this.hashCalled = false;

        return result;
    }

    equalsHaveBeenCalled(): boolean {
        const result: boolean = this.equalsCalled;

        this.equalsCalled = false;

        return result;
    }

    hash(unhashed: string): string {
        this.hashCalled = true;
        unhashed;

        return unhashed;
    }

    equals(unhashed: string, hashed: string): boolean {
        this.equalsCalled = true;
        unhashed;
        hashed;
        return unhashed === hashed;
    }
}

export default HasherImp;
