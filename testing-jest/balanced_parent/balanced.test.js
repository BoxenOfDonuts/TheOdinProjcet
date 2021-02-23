import checkIfValidParenthesis from './balanced';

test('returns true for for correct string', () => {
  expect(checkIfValidParenthesis('()')).toBe(true);
});

test('returns true for for complicated correct string', () => {
  expect(checkIfValidParenthesis('({[]})')).toBe(true);
});

test('returns true for for nested correct string', () => {
  expect(checkIfValidParenthesis('({{[]([])}})')).toBe(true);
});

test('returns false for for incorrect string', () => {
  expect(checkIfValidParenthesis('[')).toBe(false);
});

test('returns false for empty string', () => {
  expect(checkIfValidParenthesis('')).toBe(false);
})