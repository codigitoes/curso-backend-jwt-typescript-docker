import User from '../model/user';
import Email from '../valueobject/email';

interface UserRepository {
    create(model: User): void;
    getByEmail(email: Email): User;
}

export default UserRepository;
