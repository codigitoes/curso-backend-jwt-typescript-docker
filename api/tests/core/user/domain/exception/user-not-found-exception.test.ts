import UserNotFoundException from '../../../../../src/core/user/domain/exception/user-not-found-exception';
import UserMother from '../../../../mother/user.mother';

describe('user not found exception', () => {
    it('should can create without value', () => {
        const sut = UserMother.UserNotFoundException();

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${UserNotFoundException.DEFAULT_MESSAGE} ""`
        );
    });

    it('should can create with a value', () => {
        const sut = UserMother.UserNotFoundException('any value');

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${UserNotFoundException.DEFAULT_MESSAGE} "any value"`
        );
    });
});
