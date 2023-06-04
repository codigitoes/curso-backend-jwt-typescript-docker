class Email {
    public constructor(public readonly value: string) {
        this.validateOrThrowException(value);
    }

    private validateOrThrowException(value: string) {
        this.validateFormatOrThrowException(value);
    }

    private validateFormatOrThrowException(value: string): void {
        if (
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value
            )
        ) {
            return;
        }

        this.throwException();
    }

    private throwException(): void {
        throw new Error();
    }
}

export default Email;
