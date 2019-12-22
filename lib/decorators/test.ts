import { Chiron } from "../core/chiron-context";
import { TestSuite } from "../core/helpers/test-suite";

export const test = (testName?: string): any => (
    target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => {
    var suite = new TestSuite(target, testName ? testName : propertyName, descriptor.value as Function);
    Chiron.addTestSuite(suite);
}