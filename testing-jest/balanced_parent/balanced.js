class Stack {
  constructor() {
    this.item = [];
    this.top = null;
  }

  isEmpty() {
    return this.item.length === 0;
  }

  getTop() {
    if (!this.isEmpty) {
      return null;
    }
    return this.top
  }

  push(value) {
    this.item.push(value);
    this.top = value;
  }

  pop() {
    if (!this.isEmpty()) {
      if (this.item.length === 1) {
        this.item.top = null;
        return this.item.pop()
      } else {
        this.top = this.item[this.item.length -2];
        return this.item.pop()
      }
    } else {
      return null
    }
  }
}


const checkIfValidParenthesis = (string) => {
  if (string === '') return false;
  const stack = new Stack();
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (let value of string) {
    if (value === '(' || value === '[' || value === '{') {
      stack.push(value);
    } else {
      if (map[value] === stack.top) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.isEmpty() ? true: false;

}

module.exports = checkIfValidParenthesis;