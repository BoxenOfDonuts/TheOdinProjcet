const analyze = (array) => {
  const _average = () => {
    return array.reduce((accum, value) => accum + Number(value)) / array.length
  }

  const _min = () => {
    return Math.min(...array)
  }

  const _max = () => {
    return Math.max(...array)
  }

  const _length = () => {
    return array.length;
  }

  if (array.length === 0) {
    throw new Error('no array passed')
  } else if (array.some(isNaN)) {
    throw new Error('Non numeric-ish string')
  }



  return {
    average: parseFloat(_average().toFixed(3)),
    min: _min(),
    max: _max(),
    length: _length(),
  }
}

module.exports = analyze;