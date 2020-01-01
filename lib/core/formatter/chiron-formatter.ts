import { Formatter } from "./formatter";
import { TestResult, Result } from "../helpers/entities/test-result";
import chalk, { Chalk } from "chalk";
import * as logSymbols from "log-symbols"
import { Dictionary } from "../helpers/structures/dictionary";
import * as align from "wide-align";
export class ChironFormatter implements Formatter {

    formatResult(result: TestResult): void {
        this.printResult(result);
    }

    formatResults(results: Dictionary<TestResult[]>): void {
        var groupedResults = this.group(results);
        this.printGrouped(groupedResults);
    }

    private group(results: Dictionary<TestResult[]>): Dictionary<Dictionary<TestResult[]>> {
        var keys = results.getKeys();
        var groupedResults = new Dictionary<Dictionary<TestResult[]>>();
        for (let index in keys) {
            let key = keys[index];
            var result = results[key];
            result.forEach(element => {
                this.groupResult(groupedResults, element, key);
            });
        }
        return groupedResults;
    }

    private groupResult(grouping: Dictionary<Dictionary<TestResult[]>>, result: TestResult, key: string) {
        var testSuiteName = result.target.testSuiteName;
        if (testSuiteName) this.addSafe(grouping, testSuiteName, key, result);
        else this.addSafe(grouping, "common", key, result);
    }

    private addSafe(grouping: Dictionary<Dictionary<TestResult[]>>, testSuiteName: string, key: string, result: TestResult) {
        if (!grouping[testSuiteName]) {
            grouping[testSuiteName] = new Dictionary<TestResult[]>();
        }
        if (!grouping[testSuiteName][key]) grouping[testSuiteName][key] = [];
        grouping.get(testSuiteName).get(key).push(result);
    }

    private printGrouped(grouping: Dictionary<Dictionary<TestResult[]>>) {
        var keys = grouping.getKeys();
        for (let index in keys) {
            let key = keys[index];
            if (key === "common") continue;
            var result = grouping[key];
            this.printKey(key);
            this.printGrouping(result, 2);
        }
        if (grouping["common"]) this.printGrouping(grouping["common"]);
    }

    private printGrouping(results: Dictionary<TestResult[]>, alignOffset = 0) {
        var keys = results.getKeys();
        for (let index in keys) {
            let key = keys[index];
            this.printKey(key, alignOffset);
            var result = results[key];
            result.forEach(element => {
                this.printResult(element, alignOffset);
            });
        }
    }

    private printKey(value: string, alignOffset = 0): void {
        console.log(align.right(value, value.length + alignOffset));
    }

    private printResult(result: TestResult, alignOffset = 0): void {
        var status = result.result === Result.Success ? logSymbols.success : logSymbols.error;
        var message = result.result === Result.Success ?
            chalk.green(result.name + " succeeded") : chalk.red(result.name + " " + result.output)
        console.log(align.right(status, alignOffset + 3), align.right(message, alignOffset + 5));
    }
}