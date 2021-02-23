import { TestScheduler } from 'jest';
import caesar from './caesar';

test('Works without wrapping', () => {
  expect(caesar('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('works with no movement', () => {
  expect(caesar('A', 0)).toEqual('A');
})

test('works with no movement', function() {
  expect(caesar('A', 0)).toEqual('A');
});
test('works with single letters', function() {
  expect(caesar('A', 1)).toEqual('B');
});
test('works with words', function() {
  expect(caesar('Aaa', 1)).toEqual('Bbb');
});
test('works with phrases', function() {
  expect(caesar('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
});
test('works with negative shift', function() {
  expect(caesar('Mjqqt, Btwqi!', -5)).toEqual('Hello, World!');
});
test('wraps', function() {
  expect(caesar('Z', 1)).toEqual('A');
});
test('works with large shift factors', function() {
  expect(caesar('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
});
test('works with large negative shift factors', function() {
  expect(caesar('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
});