import InvalidUserPasswordException from '../../../../../src/core/user/domain/exception/invalid-user-password-exception';
import UserMother from '../../../../mother/user.mother';

describe('invalid password exception', () => {
    it('should can create without value', () => {
        const sut = UserMother.InvalidUserPasswordException();

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserPasswordException.DEFAULT_MESSAGE} ""`
        );
    });

    it('should can create with a value', () => {
        const sut = UserMother.InvalidUserPasswordException('any value');

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserPasswordException.DEFAULT_MESSAGE} "any value"`
        );
    });
});
