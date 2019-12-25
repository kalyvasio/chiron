import { Formatter } from "./formatter";
import { TestResult, Result } from "../helpers/entities/test-result";
import chalk, { Chalk } from "chalk";
import * as logSymbols from "log-symbols"
import { Dictionary } from "../helpers/structures/dictionary";
import * as align from "wide-align";
export class ChironFormatter implements Formatter {

    formatResult(result: TestResult): void {
        this.format(result);
    }

    formatResults(results: Dictionary<TestResult[]>): void {
        var keys = results.getKeys();
        for (let index in keys) {
            let key = keys[index];
            console.log(key);
            var result = results[key];
            result.forEach(element => {
                this.format(element);
            });
        }
    }

    private format(result: TestResult): void {
        var status = result.result === Result.Success ? logSymbols.success : logSymbols.error;
        var message = result.result === Result.Success ?
            chalk.green(result.name + " succeeded") : chalk.red(result.name + " " + result.output)
        console.log(align.right(status, 3), align.right(message, 5));
    }
}