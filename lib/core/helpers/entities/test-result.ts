export class TestResult {
    constructor(
        public result: Result,
        public name: string,
        public output?: string) { }
}

export enum Result {
    Success,
    Failure
}