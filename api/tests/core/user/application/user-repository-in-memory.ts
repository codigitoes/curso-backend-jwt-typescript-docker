import UserNotFoundException from '../../../../src/core/domain/exception/user-not-found-exception';
import User from '../../../../src/core/domain/model/user';
import UserRepository from '../../../../src/core/domain/repository/user-repository';
import Email from '../../../../src/core/domain/valueobject/email';

class UserRepositoryInMemory implements UserRepository {
    private users: User[] = [];
    private createCalled: boolean = false;
    private getCalled: boolean = false;

    create(model: User): void {
        this.createCalled = true;
        this.users.push(model);
    }

    getByEmail(email: Email): User {
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
