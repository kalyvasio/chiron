export class Dictionary<T> {

    public add(key: string, value: T) {
        this[key] = value;
    }

    public getKeys(): string[] {
        return Object.keys(this);
    }
}