const caesar = (string, key) => {
  const lowercase = [];
  const uppercase = [];

  for (let i = 65; i <= 90; i++) {
    uppercase.push(i);
  }

  for (let i = 97; i <= 122; i++) {
    lowercase.push(i);
  }

  // const charCodes = Array.from(string).map(value => {
  //   let encrypted = null;
  //   let charCode = value.charCodeAt();
  //   if (charCode >= 65 && charCode <=90) {
  //     encrypted = (charCode - 65) % 26 + key + 65;
  //   } else if (charCode >= 97 && charCode <= 122) {
  //     encrypted = (charCode - 97) % 26 + key + 97;
  //   } else {
  //     encrypted = charCode;
  //   }

  //   return String.fromCharCode(encrypted);
  // })

  // return charCodes.join('');


  const encryptedArray = Array.from(string).map(value => {
    let charCode = value.charCodeAt();
    let index = null;

    if (uppercase.indexOf(charCode) !== -1) {
      index = (uppercase.indexOf(charCode) + key + 26) % 26
      return String.fromCharCode(uppercase[index])
    } else if (lowercase.indexOf(charCode) !== -1) {
      index = (lowercase.indexOf(charCode) + key + 26) % 26
      return String.fromCharCode(lowercase[index])
    } else {
      return String.fromCharCode(charCode);
    }
  })

  return encryptedArray.join('');

}

module.exports = caesar