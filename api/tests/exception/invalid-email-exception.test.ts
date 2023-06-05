import InvalidUserEmailException from '../../src/core/domain/exception/invalid-user-email-exception';

describe('invalid email exception', () => {
    it('should can create without value', () => {
        expect(new InvalidUserEmailException()).toBeInstanceOf(Error);
    });
});
