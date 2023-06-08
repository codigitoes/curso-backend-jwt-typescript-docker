interface Hasher {
    hash(unhashed: string): string;
    equals(unhashed: string, hashed: string): boolean;
}

export default Hasher;
