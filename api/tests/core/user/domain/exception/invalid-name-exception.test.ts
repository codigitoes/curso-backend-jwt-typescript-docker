import InvalidUserNameException from '../../../../../src/core/user/domain/exception/invalid-user-name-exception';
import UserMother from '../../../../mother/user.mother';

describe('invalid name exception', () => {
    it('should can create without value', () => {
        const sut = UserMother.InvalidUserNameException();

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserNameException.DEFAULT_MESSAGE} ""`
        );
    });

    it('should can create with a value', () => {
        const sut = UserMother.InvalidUserNameException('any value');

        const message: string = sut.message;

        expect(message).toStrictEqual(
            `${InvalidUserNameException.DEFAULT_MESSAGE} "any value"`
        );
    });
});
