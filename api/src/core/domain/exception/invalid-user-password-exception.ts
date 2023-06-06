class InvalidUserPasswordException extends Error {
    public static DEFAULT_MESSAGE = 'invalid user password';

    constructor(message: string = '') {
        super(`${InvalidUserPasswordException.DEFAULT_MESSAGE} "${message}"`);
    }
}

export default InvalidUserPasswordException;
