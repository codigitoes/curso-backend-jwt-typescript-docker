import Email from './email';
import Id from './id';
import Name from './name';
import Password from './password';

class User {
    public constructor(
        public readonly id: Id,
        public readonly name: Name,
        public readonly email: Email,
        public readonly password: Password
    ) {}
}

export default User;
