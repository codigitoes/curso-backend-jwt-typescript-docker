import Email from '../../src/core/user/email';
import Name from '../../src/core/user/name';
import { faker } from '@faker-js/faker';
import User from '../../src/core/user/user';
import Password from '../../src/core/user/password';
import UserRegisterRequest from '../../src/core/application/register/user-register-request';
import Id from '../../src/core/user/id';

class UserMother {
    public static UserRegisterRequest(
        id?: string,
        name?: string,
        email?: string,
        password?: string
    ): UserRegisterRequest {
        return new UserRegisterRequest(
            UserMother.Id(id).value,
            UserMother.Name(name).value,
            UserMother.Email(email).value,
            UserMother.Password(password).value
        );
    }
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

    public static IdEmpty(): Id {
        return new Id('');
    }

    public static IdWrongFormat(): Id {
        return new Id(faker.internet.password(36));
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

    public static Id(uuid?: string): Id {
        return new Id(uuid ? uuid : Id.generateRandomUuidV4());
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
