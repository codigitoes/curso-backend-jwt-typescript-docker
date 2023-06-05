import InvalidUserPasswordException from '../../../../../src/core/domain/exception/invalid-user-password-exception';

describe('invalid password exception', () => {
    it('should can create without value', () => {
        expect(new InvalidUserPasswordException()).toBeInstanceOf(Error);
    });
});
