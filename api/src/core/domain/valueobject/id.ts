import crypto from 'crypto';
import InvalidUserIdException from '../exception/invalid-user-id-exception';

class Id {
    public static random(): Id {
        return new Id(Id.generateRandomUuidV4());
    }

    public static isValid(uuid: string): boolean {
        const ereg: RegExp = new RegExp(
            /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
        );

        return ereg.test(uuid);
    }

    public static generateRandomUuidV4(): string {
        return crypto.randomUUID();
    }

    public constructor(public readonly value: string) {
        this.validateOrThrowException(value);
    }

    private validateOrThrowException(uuid: string) {
        this.validateFormatOrThrowException(uuid);
    }

    private validateFormatOrThrowException(uuid: string): void {
        if (Id.isValid(uuid)) {
            return;
        }

        this.throwException();
    }

    private throwException(): void {
        throw new InvalidUserIdException();
    }
}

export default Id;
