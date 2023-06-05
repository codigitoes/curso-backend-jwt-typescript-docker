import Email from '../../src/core/user/email';
import Name from '../../src/core/user/name';
import { faker } from '@faker-js/faker';
import User from '../../src/core/user/user';
import Password from '../../src/core/user/password';

class UserMother {
    public static Name(name?: string): Name {
        return new Name(
            name
                ? name
                : faker.word.adverb({
                      length: {
                          min: Name.MINIMUM_LENGTH,
                          max: Name.MAXIMUM_LENGTH,
                      },
                  })
        );
    }

    public static Password(password?: string): Password {
        return new Password(
            password
                ? password
                : faker.internet.password(Password.MINIMUM_LENGTH + 1)
        );
    }

    public static NameEmpty(): Name {
        return new Name('');
    }

    public static NameTooShort(): Name {
        return new Name('a'.repeat(Name.MINIMUM_LENGTH - 1));
    }

    public static NameTooLong(): Name {
        return new Name('a'.repeat(Name.MAXIMUM_LENGTH + 1));
    }

    public static PasswordEmpty(): Password {
        return new Password('');
    }

    public static PasswordTooShort(): Password {
        return new Password('a'.repeat(Password.MINIMUM_LENGTH - 1));
    }

    public static PasswordTooLong(): Password {
        return new Password('a'.repeat(Password.MAXIMUM_LENGTH + 1));
    }

    public static User(email?: string, name?: string, password?: string): User {
        return new User(
            UserMother.Name(name),
            UserMother.Email(email),
            UserMother.Password(password)
        );
    }

    public static Email(email?: string): Email {
        return new Email(email ? email : faker.internet.email());
    }
}

export default UserMother;
