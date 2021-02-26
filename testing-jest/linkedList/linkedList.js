const makeNode = (value) => {
  return {
    value,
    next: null,
  }
}

const linkedListTools = (data) => ({
  append: (value) => {
    let node = makeNode(value);
    if(!data.head) {
      data.head = data.tail = node;
      return node;
    }

    data.tail.next = node;
    data.tail = node;
    return node
  },
  printList: () => {
    let current = data.head;
    let arr = [];
    while(current) {
      arr.push(current.value)
      current = current.next;
    }
    return arr
  },
  getLength: () => {
    let current = data.head;
    let len = 0;
    while(current) {
      len++
      current=current.next;
    }
    return len
  },
  prepend: (value) => {
    const node = makeNode(value);
    if (!data.head) {
      data.head = data.tail = node;
    }

    data.next = data.head;
    data.head = node;
    
    return node;
  }
})

const LinkedList = () => {
  const data = {
    head: null,
    tail: null,
  }

  // return Object.assign(data, linkedListTools(data))
  return {
    data,
    ...linkedListTools(data)
  }
}

export default LinkedList;