import { TestObject } from "../helpers/entities/test-object";
import { TestResult } from "../helpers/entities/test-result";
import { Dictionary } from "../helpers/structures/dictionary";

export interface Executor {
    executeTest(test: TestObject): TestResult
    executeTests(testSuite: Dictionary<TestObject[]>): Dictionary<TestResult[]>
}