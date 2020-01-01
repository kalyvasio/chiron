import { test } from "../decorators/test";
import { Assert } from "../assertions/assert";
import { Deleter } from "./resources/deleter";
import { Adder } from "./resources/adder";

export class Tests {

    @test()
    test_two_plus_three_equals_five() {
        Assert.same(new Adder().add(2, 3), 5);
    }

    @test()
    test_twenty_minus_three_equals_seventeen() {
        Assert.same(new Deleter().delete(20, 3), 17);
    }

    @test("this test fails")
    fail() {
        Assert.same(new Deleter().delete(10, 3), 17);
    }
}