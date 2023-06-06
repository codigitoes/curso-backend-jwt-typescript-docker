import InvalidUserPasswordException from '../../../../../src/core/domain/exception/invalid-user-password-exception';

describe('invalid password exception', () => {
    it('should can create without value', () => {
        const sut = new InvalidUserPasswordException();

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserPasswordException.DEFAULT_MESSAGE} ""`
        );
    });

    it('should can create with a value', () => {
        const sut = new InvalidUserPasswordException('any value');

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserPasswordException.DEFAULT_MESSAGE} "any value"`
        );
    });
});
