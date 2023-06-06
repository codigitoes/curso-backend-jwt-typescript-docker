import InvalidUserNameException from '../../../../../src/core/domain/exception/invalid-user-name-exception';

describe('invalid name exception', () => {
    it('should can create without value', () => {
        const sut = new InvalidUserNameException();

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserNameException.DEFAULT_MESSAGE} ""`
        );
    });

    it('should can create with a value', () => {
        const sut = new InvalidUserNameException('any value');

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserNameException.DEFAULT_MESSAGE} "any value"`
        );
    });
});
