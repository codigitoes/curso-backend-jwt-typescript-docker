import InvalidUserEmailException from '../../../../../src/core/user/domain/exception/invalid-user-email-exception';
import UserMother from '../../../../mother/user.mother';

describe('invalid email exception', () => {
    it('should can create without value', () => {
        const sut = UserMother.InvalidUserEmailException();

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserEmailException.DEFAULT_MESSAGE} ""`
        );
    });

    it('should can create with a value', () => {
        const sut = UserMother.InvalidUserEmailException('any value');

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserEmailException.DEFAULT_MESSAGE} "any value"`
        );
    });
});
