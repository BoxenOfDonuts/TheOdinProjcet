const capitalize = (string) => {
  if (string === '') {
    return string
  }
  let stringArray = Array.from(string);
  stringArray.splice(0, 1, stringArray[0].toUpperCase());
  const cap = stringArray.join('');
  return cap;
}

module.exports= capitalize;