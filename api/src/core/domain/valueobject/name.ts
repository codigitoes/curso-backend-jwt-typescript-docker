import InvalidUserNameException from '../exception/invalid-user-name-exception';

class Name {
    public static MINIMUM_LENGTH: number = 3;
    public static MAXIMUM_LENGTH: number = 25;

    public constructor(public readonly value: string) {
        this.validateOrThrowException(value);
    }

    private validateOrThrowException(value: string) {
        this.validateLengthOrThrowException(value);
        this.validateFormatOrThrowException(value);
    }

    private validateFormatOrThrowException(value: string): void {
        if (/^[a-zA-Z]+[a-zA-Z\s]+[a-zA-Z]+$/.test(value)) {
            return;
        }

        this.throwException();
    }

    private validateLengthOrThrowException(value: string): void {
        if (
            value.length >= Name.MINIMUM_LENGTH &&
            value.length <= Name.MAXIMUM_LENGTH
        ) {
            return;
        }

        this.throwException();
    }

    private throwException(): void {
        throw new InvalidUserNameException();
    }
}

export default Name;
