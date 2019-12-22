import { Formatter } from "./formatter";
import { TestResult, Result } from "../helpers/test-result";
import chalk from "chalk";
import logSymbols from "log-symbols";
export class ChironFormatter implements Formatter {
    format(result: TestResult): void {
        var status = result.result === Result.Success ? logSymbols.success : logSymbols.error;
        var message = result.result === Result.Success ?
            chalk.green(result.name + " succeeded") : chalk.red(result.name + " " + result.output)
        console.log(status, message);
    }
}