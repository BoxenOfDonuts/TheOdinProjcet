import reverse from './reverse';

test('Expect Apple to be elppA', () => {
  expect(reverse('Apple')).toBe('elppA');
})

test("Expect '' to be returned for empty string", () => {
  expect(reverse('')).toBe('');
})

test('Throws error on non-string', () => {
  expect(() =>reverse(NaN)).toThrow()
})