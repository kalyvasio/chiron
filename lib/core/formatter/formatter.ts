import { TestResult } from "../helpers/entities/test-result";
import { Dictionary } from "../helpers/structures/dictionary";

export interface Formatter {
    formatResult(result: TestResult): void
    formatResults(result: Dictionary<TestResult[]>): void
}