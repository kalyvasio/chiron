import { TestSuite } from "./helpers/test-suite";

export class ChironContext {
    private testingFunctions: TestSuite[] = [];

    public addTestSuite(suite: TestSuite) {
        this.testingFunctions.push(suite);
    }

    public start() {
        this.testingFunctions.forEach(this.executeTestSuite)
    }

    private executeTestSuite(suite: TestSuite) {
        try {
            suite.testFunction();
            console.log(suite.testTitle + " Succeeded");
        } catch (error) {
            console.log(suite.testTitle + " Failed with error " + error.message);
        }
    }
}

export const Chiron = new ChironContext(); 