const calculator = (() => {
  const sum = (array) => {
    return array.reduce((sum, value) => sum+value)
  }

  const subtract = (a, b) => {
    return Number(a) - Number(b);
  }

  const divide = (a, b) => {
    const numA = Number(a);
    const numB = Number(b);

    if (numB === 0) {
      throw new Error('Cant Divide by Zero!')
    }

    return numA / numB;
  }

  const multiply = (array) => {
    return array.reduce((accum, value) => accum * value)
  }

  return {
    sum,
    subtract,
    divide,
    multiply,
  }
})();

module.exports = calculator;