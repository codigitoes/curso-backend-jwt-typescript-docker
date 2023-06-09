import User from '../model/user';
import Email from '../valueobject/email';
import Id from '../valueobject/id';

interface UserRepository {
    create(model: User): Promise<void>;
    getByEmail(email: Email): Promise<User>;
    delete(id: Id): Promise<void>;
}

export default UserRepository;
