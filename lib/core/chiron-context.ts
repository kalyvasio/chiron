import { TestObject } from "./helpers/entities/test-object";
import { Executor } from "./executor/executor";
import { ChironExecutor } from "./executor/chiron-executor";
import { TestResult } from "./helpers/entities/test-result";
import { Formatter } from "./formatter/formatter";
import { ChironFormatter } from "./formatter/chiron-formatter";
import { Dictionary } from "./helpers/structures/dictionary";

export class ChironContext {
    private testingFunctions: Dictionary<TestObject[]> = new Dictionary<TestObject[]>();
    private executor: Executor = new ChironExecutor();
    private formatter: Formatter = new ChironFormatter();

    public addTestSuite(suite: TestObject) {
        if (!this.testingFunctions[suite.context]) {
            this.testingFunctions[suite.context] = [];
        }
        this.testingFunctions[suite.context].push(suite);
    }

    public start() {
        var results = this.executeTests();
        this.formatResults(results);
    }

    private executeTests(): Dictionary<TestResult[]> {
        return this.executor.executeTests(this.testingFunctions);
    }

    private formatResults(results: Dictionary<TestResult[]>) {
        this.formatter.formatResults(results);
    }
}

export const Chiron = new ChironContext(); 