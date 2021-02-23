import capitalize from './capitalize';

test ('Capitalizes a one word string', () => {
  expect(capitalize('boat')).toBe('Boat') 
})

test('returns empty string for no string', () => {
  expect(capitalize('')).toBe('');
})

test ('Capatalizes a sentence', () => {
  expect(capitalize('i love testing')).toBe('I love testing');
})