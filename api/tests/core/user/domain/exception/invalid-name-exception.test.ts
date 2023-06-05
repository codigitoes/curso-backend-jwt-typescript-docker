import InvalidUserNameException from '../../../../../src/core/domain/exception/invalid-user-name-exception';

describe('invalid name exception', () => {
    it('should can create without value', () => {
        expect(new InvalidUserNameException()).toBeInstanceOf(Error);
    });
});
