import InvalidUserIdException from '../../../../../src/core/domain/exception/invalid-user-id-exception';
import UserMother from '../../../../mother/user.mother';

describe('invalid id exception', () => {
    it('should can create without value', () => {
        const sut = UserMother.InvalidUserIdException();

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserIdException.DEFAULT_MESSAGE} ""`
        );
    });

    it('should can create with a value', () => {
        const sut = UserMother.InvalidUserIdException('any value');

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserIdException.DEFAULT_MESSAGE} "any value"`
        );
    });
});
