class UserRegisterRequest {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        public readonly password: string
    ) {}
}

export default UserRegisterRequest;
