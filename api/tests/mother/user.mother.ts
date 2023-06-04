import Email from '../../src/core/user/email';
import Name from '../../src/core/user/name';
import { faker } from '@faker-js/faker';
import User from '../../src/core/user/user';

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

    public static NameEmpty(): Name {
        return new Name('');
    }

    public static NameTooShort(): Name {
        return new Name('a'.repeat(Name.MINIMUM_LENGTH - 1));
    }

    public static NameTooLong(): Name {
        return new Name('a'.repeat(Name.MAXIMUM_LENGTH + 1));
    }

    public static User(email?: string, name?: string): User {
        return new User(UserMother.Name(name), UserMother.Email(email));
    }

    public static Email(email?: string): Email {
        return new Email(email ? email : faker.internet.email());
    }
}

export default UserMother;
