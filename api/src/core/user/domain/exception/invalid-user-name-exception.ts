class InvalidUserNameException extends Error {
    public static DEFAULT_MESSAGE = 'invalid user name';

    constructor(message: string = '') {
        super(`${InvalidUserNameException.DEFAULT_MESSAGE} "${message}"`);
    }
}

export default InvalidUserNameException;
