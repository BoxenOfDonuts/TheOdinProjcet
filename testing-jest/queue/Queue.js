const QueueFunctions = (data) => ({
  add: (value) => data.items.push(value),
  dequeue: () => data.items.shift(),
  listQueue: () => data.items,
})

const Queue = () => {
  const data = {
    items: [],
  }

  return {
    ...data,
    ...QueueFunctions(data)
  }
}

const findBinary = (n) => {
  //3
  // [1, 10, 11, 100]

  const queue = Queue();
  queue.add("1");
  let result= [];

  for (let i = 0; i < n; i++) {
    result.push(queue.dequeue())
    let s1 = result[i] + "0";
    let s2 = result[i] + "1";
    
    queue.add(s1);
    queue.add(s2);
  }
  console.log(queue.listQueue())
  return result;
}

export { Queue, findBinary}