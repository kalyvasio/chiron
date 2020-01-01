export class TestResult {
    constructor(
        public result: Result,
        public name: string,
        public target: any,
        public output?: string) { }
}

export enum Result {
    Success,
    Failure
}