import { faker } from '@faker-js/faker';
import InvalidUserCredentialException from '../../src/core/user/domain/exception/invalid-user-credential-exception';
import UserNotFoundException from '../../src/core/user/domain/exception/user-not-found-exception';
import InvalidUserNameException from '../../src/core/user/domain/exception/invalid-user-name-exception';
import InvalidUserIdException from '../../src/core/user/domain/exception/invalid-user-id-exception';
import UserLoginRequest from '../../src/core/user/application/login/user-login-request';
import InvalidUserEmailException from '../../src/core/user/domain/exception/invalid-user-email-exception';
import InvalidUserPasswordException from '../../src/core/user/domain/exception/invalid-user-password-exception';
import UserRegisterRequest from '../../src/core/user/application/register/user-register-request';
import Name from '../../src/core/user/domain/valueobject/name';
import Password from '../../src/core/user/domain/valueobject/password';
import Id from '../../src/core/user/domain/valueobject/id';
import User from '../../src/core/user/domain/model/user';
import Email from '../../src/core/user/domain/valueobject/email';

class UserMother {
    public static InvalidUserCredentialException(): InvalidUserCredentialException {
        return new InvalidUserCredentialException();
    }

    public static UserNotFoundException(
        message?: string
    ): UserNotFoundException {
        return new UserNotFoundException(message);
    }

    public static InvalidUserEmailException(
        message?: string
    ): InvalidUserEmailException {
        return new InvalidUserEmailException(message);
    }

    public static InvalidUserNameException(
        message?: string
    ): InvalidUserNameException {
        return new InvalidUserNameException(message);
    }

    public static InvalidUserPasswordException(
        message?: string
    ): InvalidUserPasswordException {
        return new InvalidUserPasswordException(message);
    }

    public static InvalidUserIdException(
        message?: string
    ): InvalidUserIdException {
        return new InvalidUserIdException(message);
    }

    public static UserRegisterRequest(
        id?: string,
        name?: string,
        email?: string,
        password?: string
    ): UserRegisterRequest {
        return new UserRegisterRequest(
            id !== undefined ? id : UserMother.Id(id).value,
            name !== undefined ? name : UserMother.Name(name).value,
            email !== undefined ? email : UserMother.Email(email).value,
            password !== undefined
                ? password
                : UserMother.Password(password).value
        );
    }

    public static UserLoginRequest(
        email?: string,
        password?: string
    ): UserLoginRequest {
        return new UserLoginRequest(
            email !== undefined ? email : UserMother.Email(email).value,
            password !== undefined
                ? password
                : UserMother.Password(password).value
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

    public static User(
        id?: string,
        email?: string,
        name?: string,
        password?: string
    ): User {
        return new User(
            UserMother.Id(id),
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
