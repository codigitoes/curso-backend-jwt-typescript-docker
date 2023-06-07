class UserNotFoundException extends Error {
    public static DEFAULT_MESSAGE = 'user not found';

    constructor(message: string = '') {
        super(`${UserNotFoundException.DEFAULT_MESSAGE} "${message}"`);
    }
}

export default UserNotFoundException;
