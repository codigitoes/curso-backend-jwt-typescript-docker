class UserLoginRequest {
    constructor(
        public readonly email: string,
        public readonly password: string
    ) {}
}

export default UserLoginRequest;
