import { TestResult } from "../helpers/test-result";

export interface Formatter {
    format(result: TestResult): void
}