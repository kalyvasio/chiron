# Chiron
A Typescript Testing Framework based on Typescript decorators to define tests, suites and other beautiful features.
# Features
## Annotate functions with Typescript decorators like @test to define tests.
```typescript
@test()
assert_two_plus_three_equals_five() {
    Assert.same(2 + 3, 5);
}
```
**Result:** test_two_plus_three_equals_five Succeeded
## Group tests under same context with @testSuite decorator.
```typescript
@testSuite("Math Test Samples")
export class MathTestSamples {

    @test()
    assert_two_plus_three_equals_five() {
        Assert.same(2 + 3, 5);
    }

    @test()
    assert_twenty_minus_three_equals_seventeen() {
        Assert.same(20 - 3, 17);
    }
}
```
# Usage
Simply add Chiron to your npm script configuration
```json
{
    ...
    "scripts": {
        "test": "chiron --files=/lib/examples/tests"
    }
    ...
}

```