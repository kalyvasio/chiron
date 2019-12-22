import { TestSuite } from "../helpers/test-suite";
import { TestResult } from "../helpers/test-result";

export interface Executor {
    execute(testSuite: TestSuite): TestResult
}