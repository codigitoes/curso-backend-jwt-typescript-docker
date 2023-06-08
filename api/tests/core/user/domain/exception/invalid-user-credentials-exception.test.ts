import InvalidUserCredentialException from '../../../../../src/core/user/domain/exception/invalid-user-credential-exception';
import UserMother from '../../../../mother/user.mother';

describe('invalid user credentials exception', () => {
    it('should can create without value', () => {
        const sut = UserMother.InvalidUserCredentialException();

        const message: string = sut.message;

        expect(message).toStrictEqual(
            InvalidUserCredentialException.DEFAULT_MESSAGE
        );
    });
});
