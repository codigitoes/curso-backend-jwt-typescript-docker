import InvalidUserIdException from '../../src/core/domain/exception/invalid-user-id-exception';

describe('invalid id exception', () => {
    it('should can create without value', () => {
        expect(new InvalidUserIdException()).toBeInstanceOf(Error);
    });
});
