import { Chiron } from "../core/chiron-context";
import { TestObject } from "../core/helpers/entities/test-object";

export const test = (testName?: string): any => (
    target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => {
        var suite = new TestObject(target.constructor.name, target, testName ? testName : propertyName, descriptor.value as Function);
        Chiron.addTestSuite(suite);
}