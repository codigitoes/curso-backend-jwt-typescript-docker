import User from '../model/user';

interface UserRepository {
    create(model: User): void;
}

export default UserRepository;
