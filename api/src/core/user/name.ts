class Name {
    public static MINIMUM_LENGTH: number = 3;
    public static MAXIMUM_LENGTH: number = 25;

    public constructor(public readonly value: string) {
        this.validateOrThrowException(value);
    }

    private validateOrThrowException(value: string) {
        if (
            this.isValidLength(value) === false ||
            this.isValidFormat(value) === false
        ) {
            throw new Error();
        }
    }

    private isValidFormat(value: string): boolean {
        return /^[a-zA-Z]+[a-zA-Z\s]+[a-zA-Z]+$/.test(value);
    }

    private isValidLength(value: string): boolean {
        return (
            value.length < Name.MINIMUM_LENGTH ||
            value.length > Name.MAXIMUM_LENGTH === false
        );
    }
}

export default Name;
