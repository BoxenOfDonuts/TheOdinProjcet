import LinkedList from './linkedList';
const { test, expect } = require('@jest/globals');


test('creates a node', () => {
  const list = LinkedList();
  expect(list.append(1)).toEqual({value:1, next:null})
})

test('adds a node correctly', () => {
  let list = LinkedList();
  list.append(1);
  expect(list.printList(list)).toEqual([1])
})

test('adds multiple nodes', () => {
  let list = LinkedList();
  list.append(1);
  list.append(3);
  list.append(7);
  expect(list.printList(list)).toEqual([1,3,7])
})

test('corrently gets length of linked list', () => {
  let list = LinkedList();
  list.append(1);
  list.append(3);
  list.append(7);
  expect(list.getLength()).toBe(3);
})

test('can add a value to the front of the linked list', () => {
  const list = LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.prepend(5);
  expect(list.printList()).toEqual([5,1,2,3,4])
})

test('can prepend a value to an empty list', () => {
  const list = LinkedList();
  list.prepend(1);
  expect(list.printList()).toEqual([1])
  expect(list.data.head).toEqual({value: 1, next: null})
})