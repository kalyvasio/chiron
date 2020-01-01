export class AssertionException extends Error {

    constructor(public message: string) {
        super(message);
        this.name = 'AssertionException';
        this.message = message;
        this.stack = (<any>new Error()).stack;
    }

    toString() {
        return this.name + ': ' + this.message;
    }
}
