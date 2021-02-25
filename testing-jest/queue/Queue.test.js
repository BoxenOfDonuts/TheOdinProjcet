import { Queue, findBinary } from './Queue';
const { test, expect } = require('@jest/globals');

test('You can add something to the queue', () => {
  const q = Queue();
  q.add(1);
  expect(q.listQueue()).toEqual([1])
})

test('you can add several things to the queue', () => {
  const q = Queue();
  q.add(1);
  q.add(2);
  expect(q.listQueue()).toEqual([1,2])
})

test('First in first out', () => {
  const q = Queue();
  q.add(1);
  q.add(2);
  expect(q.dequeue()).toBe(1)
  expect(q.listQueue()).toEqual([2])
})

test('Find Binary happy path', () => {
  expect(findBinary(1)).toEqual(["1"])
})

test('correctly finds numbers larger than 1', () => {
  expect(findBinary(3)).toEqual(["1", "10", "11"])
})

test('first and last number are correct', () => {
  expect(findBinary(3)[0]).toBe("1")
  expect(findBinary(3)[2]).toBe("11")
})