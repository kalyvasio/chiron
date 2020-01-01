export const testSuite = (testSuiteName?: string): any => (constructorFunction: Function) => {
    constructorFunction.prototype.testSuiteName = testSuiteName ? testSuiteName : constructorFunction.name;
}
