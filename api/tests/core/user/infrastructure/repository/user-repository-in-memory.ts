import UserNotFoundException from '../../../../../src/core/user/domain/exception/user-not-found-exception';
import User from '../../../../../src/core/user/domain/model/user';
import UserRepository from '../../../../../src/core/user/domain/repository/user-repository';
import Email from '../../../../../src/core/user/domain/valueobject/email';
import Id from '../../../../../src/core/user/domain/valueobject/id';

class UserRepositoryInMemory implements UserRepository {
    private users: User[] = [];
    private createCalled: boolean = false;
    private getCalled: boolean = false;

    async create(model: User): Promise<void> {
        this.createCalled = true;
        this.users.push(model);
    }

    async getByEmail(email: Email): Promise<User> {
        this.getCalled = true;
        let result: User | null = null;
        this.users.forEach((user) => {
            if (user.email.value === email.value) {
                result = user;
            }
        });
        if (result === null) {
            throw new UserNotFoundException(email.value);
        }

        return result;
    }

    async delete(id: Id): Promise<void> {
        id;
    }

    createHaveBeenCalled(): boolean {
        const result: boolean = this.createCalled;

        this.createCalled = false;

        return result;
    }

    getHaveBeenCalled(): boolean {
        const result: boolean = this.getCalled;

        this.getCalled = false;

        return result;
    }
}

export default UserRepositoryInMemory;
