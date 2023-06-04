import Email from './email';
import Name from './name';

class User {
    public constructor(
        public readonly name: Name,
        public readonly email: Email
    ) {}
}

export default User;
