import { Executor } from "./executor";
import { TestResult, Result } from "../helpers/entities/test-result";
import { TestObject } from "../helpers/entities/test-object";
import { Dictionary } from "../helpers/structures/dictionary";
import { AssertionException } from "../../assertions/exception/assertion-exception";

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
            return { result: Result.Success, name: test.testTitle, target: test.target } as TestResult;
        } catch (error) {
            if (error as AssertionException)
                return { result: Result.Failure, name: test.testTitle, target: test.target, output: error.message } as TestResult
            else
                throw error;
        }
    }
}