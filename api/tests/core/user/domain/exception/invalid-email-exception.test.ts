import InvalidUserEmailException from '../../../../../src/core/domain/exception/invalid-user-email-exception';

describe('invalid email exception', () => {
    it('should can create without value', () => {
        const sut = new InvalidUserEmailException();

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserEmailException.DEFAULT_MESSAGE} ""`
        );
    });

    it('should can create with a value', () => {
        const sut = new InvalidUserEmailException('any value');

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserEmailException.DEFAULT_MESSAGE} "any value"`
        );
    });
});
