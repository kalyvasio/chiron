# chiron
Typescript unit testing framework
# Usage

## Annotate functions with Typescript decorators like @test to define tests.
```typescript
@test()
assert_two_plus_three_equals_five() {
    Assert.same(2 + 3, 5);
}
```
Result: test_two_plus_three_equals_five Succeeded