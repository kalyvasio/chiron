import { AssertionException } from "./exception/assertion-exception";
import _ from "lodash";
import { equal } from "assert";

export class Assert {

    public static same(expected: any, found: any, message = "Elements are not same") {
        if (expected !== found) throw new AssertionException(message);
    }

    public static notSame(expected: any, found: any, message = "Elements are same") {
        if (expected === found) throw new AssertionException(message)
    }

    public static null(expected: any, found: any, message = "Element not null") {
        if (expected != null) throw new AssertionException(message)
    }

    public static notNull(value: boolean, message = "Element is null") {
        if (value == null) throw new AssertionException(message);
    }

    public static false(value: boolean, message = "Evaluation yielded true") {
        if (value) throw new AssertionException(message);
    }

    public static true(value: boolean, message = "Evaluation yielded false") {
        if (!value) throw new AssertionException(message);
    }

    public static equal(expected: any, found: any, message = "Elements are equal") {
        if (!_.isEqual(expected, found)) throw new AssertionException(message);
    }

    public static notEqual(expected: any, found: any, message = "Elements are not equal") {
        if (_.isEqual(expected, found)) throw new AssertionException(message);
    }

    public static collectionContains<T>(array: Array<T>, item: T, message = "Sequence does not contain element") {
        if (array.filter(x => _.isEqual(x, item)).length == 0) throw new AssertionException(message);
    }

    public static collectionNotContains<T>(array: Array<T>, item: T, message = "Sequence contains element") {
        if (array.filter(x => _.isEqual(x, item)).length == 0) throw new AssertionException(message);
    }

    public static arraysSame<T>(array1: Array<T>, array2: Array<T>, message = "Arrays not equal") {
        if (array1.length !== array2.length) throw new AssertionException(`${message} Reason: Arrays length is different`);
        
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) throw new AssertionException(`${message} Reason: Elements not same`);
        }
    }

    public static arraysEqual<T>(array1: Array<T>, array2: Array<T>, message = "Arrays not equal") {
        var isEqual = _(array1).differenceWith(array2, _.isEqual).isEmpty()
        if (!isEqual) throw new AssertionException(message);
    }
}
