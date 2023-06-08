class InvalidUserEmailException extends Error {
    public static DEFAULT_MESSAGE = 'invalid user email';

    constructor(message: string = '') {
        super(`${InvalidUserEmailException.DEFAULT_MESSAGE} "${message}"`);
    }
}

export default InvalidUserEmailException;
