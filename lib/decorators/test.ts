export const test = (testName?: string): any => (
    target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => {
    try {
        if (descriptor.value) descriptor.value();
        console.log(testName || propertyName + " Succeeded")
    } catch (error) {
        console.log(testName || propertyName + " Failed with error " + error.message);
    }
}