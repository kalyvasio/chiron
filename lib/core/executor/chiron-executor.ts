import { Executor } from "./executor";
import { TestResult, Result } from "../helpers/test-result";
import { TestSuite } from "../helpers/test-suite";

export class ChironExecutor implements Executor {
    execute(testSuite: TestSuite): TestResult {
        try {
            testSuite.testFunction();
            return { result: Result.Success, name: testSuite.testTitle } as TestResult;
        } catch (error) {
            return { result: Result.Failure, name: testSuite.testTitle, output: error.message } as TestResult
        }
    }
}