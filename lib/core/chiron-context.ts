import { TestSuite } from "./helpers/test-suite";
import { Executor } from "./executor/executor";
import { ChironExecutor } from "./executor/chiron-executor";
import { TestResult } from "./helpers/test-result";
import { Formatter } from "./formatter/formatter";
import { ChironFormatter } from "./formatter/chiron-formatter";

export class ChironContext {
    private testingFunctions: TestSuite[] = [];
    private executor: Executor = new ChironExecutor();
    private formatter: Formatter = new ChironFormatter();

    public addTestSuite(suite: TestSuite) {
        this.testingFunctions.push(suite);
    }

    public start() {
        var results = this.testingFunctions.map(suite => this.executeTestSuite(suite));
        results.forEach(result => {
            this.formatter.format(result);
        })
    }

    private executeTestSuite(suite: TestSuite): TestResult {
        return this.executor.execute(suite);
    }
}

export const Chiron = new ChironContext(); 