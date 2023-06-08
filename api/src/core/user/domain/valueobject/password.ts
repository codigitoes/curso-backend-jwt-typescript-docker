import InvalidUserPasswordException from '../exception/invalid-user-password-exception';

class Password {
    public static MINIMUM_LENGTH: number = 3;
    public static MAXIMUM_LENGTH: number = 200;

    public constructor(public readonly value: string) {
        this.validateOrThrowException(value);
    }

    private validateOrThrowException(value: string) {
        this.validateLengthOrThrowException(value);
    }

    private validateLengthOrThrowException(value: string): void {
        if (
            value.length >= Password.MINIMUM_LENGTH &&
            value.length <= Password.MAXIMUM_LENGTH
        ) {
            return;
        }

        this.throwException();
    }

    private throwException(): void {
        throw new InvalidUserPasswordException();
    }
}

export default Password;
