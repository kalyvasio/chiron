export class Dictionary<T> {

    public add(key: string, value: T): void {
        this[key] = value;
    }

    public get(key: string): T {
        return this[key];
    }

    public getKeys(): string[] {
        return Object.keys(this);
    }

    public toArray(): Array<T> {
        var values = Object.keys(this)
            .map(x => this[x])
        return [].concat.apply([], values)
    }
}
 