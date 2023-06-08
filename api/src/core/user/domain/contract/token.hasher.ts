interface TokenHasher {
    encode(payload: any): string;
    decode(token: string): any;
    isValid(token: string): boolean;
}

export default TokenHasher;
