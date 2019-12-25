import { Executor } from "./executor";
import { TestResult, Result } from "../helpers/entities/test-result";
import { TestObject } from "../helpers/entities/test-object";
import { Dictionary } from "../helpers/structures/dictionary";

export class ChironExecutor implements Executor {
    executeTest(test: TestObject): TestResult {
        return this.execute(test);
    }

    executeTests(testSuites: Dictionary<TestObject[]>): Dictionary<TestResult[]> {
        var keys = testSuites.getKeys();
        var results = new Dictionary<TestResult[]>();
        for (let index in keys) {
            let key = keys[index];
            results[key] = testSuites[key].map(suite => this.execute(suite));
        }
        return results;
    }

    execute(test: TestObject): TestResult {
        try {
            test.testFunction();
            return { result: Result.Success, name: test.testTitle } as TestResult;
        } catch (error) {
            return { result: Result.Failure, name: test.testTitle, output: error.message } as TestResult
        }
    }
}