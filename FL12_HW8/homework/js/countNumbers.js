function makeNumber (symbols) {
  let newString = '';
  for (let i=0; i < symbols.length; i++) {
    if (parseInt(symbols[i]) || parseInt(symbols[i]) === 0) {
      newString += symbols[i];
    } 
  }
  return newString;
}

function countNumbers (symbols) {
  let string = makeNumber(symbols);
  let newStringObject = {};
  for (let i = 0; i < string.length; i++) {
    !newStringObject[string[i]] ? newStringObject[string[i]] = 1 : newStringObject[string[i]]++;
  }
  return newStringObject;
}

console.log(countNumbers('erer384jj4444666888jfd123'));
console.log(countNumbers('jdjjka000466588kkkfs662555'));
console.log(countNumbers(''));