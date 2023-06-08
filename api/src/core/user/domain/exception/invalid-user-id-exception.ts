class InvalidUserIdException extends Error {
    public static DEFAULT_MESSAGE = 'invalid user id';

    constructor(message: string = '') {
        super(`${InvalidUserIdException.DEFAULT_MESSAGE} "${message}"`);
    }
}

export default InvalidUserIdException;
