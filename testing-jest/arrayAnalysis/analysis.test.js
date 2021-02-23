import analyze from './analysis';

test('happpy path', () => {
  expect(analyze([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1
  });
})

test('happpy path with multiple in array', () => {
  expect(analyze([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
})

test('negative numbers', () => {
  expect(analyze([-1,8,3,4,2,6])).toEqual({
    average: 3.667,
    min: -1,
    max: 8,
    length: 6
  });
})

test('no items in array', () => {
  expect(() => analyze([]).toThrow())
})


test('works with large numbers', () => {
  expect(analyze([100000, 93939919012, 2323393, 1, 2342342341])).toEqual({
    average: 19256936949.4,
    min: 1,
    max: 93939919012,
    length: 5,
  })
})

test('works with number like strings in array', () => {
  expect(analyze([1,8,3,4,2,'6'])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
})

test('fails with non-number strings in array', () => {
  expect(() => analyze([1,8,3,4,2,'afdas'])).toThrow();
})
