import calculator from './calculator'

test('2 + 2 = 4', () => {
  expect(calculator.sum([2,2])).toBe(4);
})

test('Sums with 0s', () => {
  expect(calculator.sum([1,0,5])).toBe(6);
})

test('Sum negative numbers', () => {
  expect(calculator.sum([1,2,-2,])).toBe(1);
})


test('5 - 2 = 3', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
})

test('Subtracts from 0', () => {
  expect(calculator.subtract(0, 5)).toBe(-5);
})

test('Can subtact 0 from another number', () => {
  expect(calculator.subtract(5, 0)).toBe(5);
})

test('1 divided by 2 = .5' , () => {
  expect(calculator.divide(1, 2)).toBe(.5);
})

test('Divide by zero throws error' , () => {
  expect(() =>calculator.divide(1, 0)).toThrow(Error);
})

test('Divide zero by a number returns zero', () => {
  expect(calculator.divide(0, 5)).toBe(0);
})

test('Dividing by 1 returns the same number', () => {
  expect(calculator.divide(100, 1)).toBe(100);
})

test('Whole Numbers work', () => {
  expect(calculator.multiply([1, 100])).toBe(100);
})

test('two negative Numbers multiply correctly', () => {
  expect(calculator.multiply([-5, -5])).toBe(25);
})

test('one negative Numbers multiply correctly', () => {
  expect(calculator.multiply([5, -5])).toBe(-25);
})

test('fractional Numbers multiply correctly', () => {
  expect(calculator.multiply([10, .5])).toBe(5);
})