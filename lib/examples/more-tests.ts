import { testSuite } from "../decorators/test-suite";
import { test } from "../decorators/test";
import { Assert } from "../assertions/assert";
import { Adder } from "./resources/adder";
import { Deleter } from "./resources/deleter";

@testSuite("Tests")
export class MoreTests {

    @test()
    assert_two_plus_three_equals_five() {
        Assert.same(new Adder().add(2, 3), 5);
    }

    @test()
    assert_twenty_minus_three_equals_seventeen() {
        Assert.same(new Deleter().delete(20, 3), 17);
    }

    @test("this test succeeds")
    fail() {
        Assert.notSame(new Deleter().delete(10, 3), 17);
    }

    @test()
    assert_collection_contains() {
        var json1 = { "key1": "value1", "key2": "value2" };
        var json2 = { "key3": "value3", "key4": "value4" }
        var array1 = [json1, json2];
        Assert.collectionContains(array1, { "key2": "value2", "key1": "value1" });
    }

    @test()
    assert_arrays_are_equal() {
        var json1 = { "key1": "value1", "key2": "value2" };
        var json2 = { "key3": "value3", "key4": "value4" }
        var array1 = [json1, json2];

        var json3 = { "key2": "value2", "key1": "value1" };
        var json4 = { "key3": "value3", "key4": "value4" }
        var array2 = [json4, json3];
        Assert.arraysEqual(array1, array2);
    }
}
