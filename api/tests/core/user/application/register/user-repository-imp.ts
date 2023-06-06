import User from '../../../../../src/core/domain/model/user';
import UserRepository from '../../../../../src/core/domain/repository/user-repository';

class UserRepositoryImp implements UserRepository {
    private createCalled: boolean = false;
    private model: User | null = null;

    create(model: User): void {
        this.model = model;
        this.createCalled = true;
    }

    createHaveBeenCalled(): boolean {
        const result: boolean = this.createCalled;

        this.createCalled = false;

        return result;
    }
}

export default UserRepositoryImp;
