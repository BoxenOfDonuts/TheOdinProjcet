const reverse = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Not a string');
  }

  return Array.from(string).reverse().join('');
}

module.exports = reverse