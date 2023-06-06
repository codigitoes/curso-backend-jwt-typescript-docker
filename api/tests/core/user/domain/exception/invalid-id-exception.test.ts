import InvalidUserIdException from '../../../../../src/core/domain/exception/invalid-user-id-exception';

describe('invalid id exception', () => {
    it('should can create without value', () => {
        const sut = new InvalidUserIdException();

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserIdException.DEFAULT_MESSAGE} ""`
        );
    });

    it('should can create with a value', () => {
        const sut = new InvalidUserIdException('any value');

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserIdException.DEFAULT_MESSAGE} "any value"`
        );
    });
});
