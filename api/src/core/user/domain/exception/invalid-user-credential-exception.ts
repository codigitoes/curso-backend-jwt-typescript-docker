class InvalidUserCredentialException extends Error {
    public static DEFAULT_MESSAGE = 'invalid user credential';

    constructor() {
        super(InvalidUserCredentialException.DEFAULT_MESSAGE);
    }
}

export default InvalidUserCredentialException;
