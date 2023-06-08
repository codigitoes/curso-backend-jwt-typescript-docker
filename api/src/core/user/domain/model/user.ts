import Email from '../valueobject/email';
import Id from '../valueobject/id';
import Name from '../valueobject/name';
import Password from '../valueobject/password';

class User {
    public constructor(
        public readonly id: Id,
        public readonly name: Name,
        public readonly email: Email,
        public readonly password: Password
    ) {}
}

export default User;
