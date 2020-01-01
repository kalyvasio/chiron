export class Assert {

    public static same(expected: any, found: any, message = "Elements did not match") {
        if (expected !== found) throw Error(message);
    }

    public static notSame(expected: any, found: any, message = "Elements are same") {
        if (expected === found) throw Error(message)
    }

    public static null(expected: any, found: any, message = "Element not null") {
        if (expected != null) throw Error(message)
    }

    public static notNull(value: boolean, message = "Element is null") {
        if (value == null) throw Error(message);
    }

    public static false(value: boolean, message = "Evaluation yielded true") {
        if (value) throw Error(message);
    }

    public static true(value: boolean, message = "Evaluation yielded false") {
        if (!value) throw Error(message);
    }

    public static collectionContains<T>(array: Array<T>, item: T, message = "Sequence does not contain element") {
        if (array.indexOf(item) === -1) throw Error(message);
    }

    public static collectionNotContains<T>(array: Array<T>, item: T, message = "Sequence contains element") {
        if (array.indexOf(item) !== -1) throw Error(message);
    }

    public static arraysSame<T>(array1: Array<T>, array2: Array<T>, message = "Arrays not equal") {
        if (array1.length !== array2.length) throw Error(`${message} Reason: Arrays length is different`);
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) throw Error(`${message} Reason: Elements not same`);
        }
    }
}