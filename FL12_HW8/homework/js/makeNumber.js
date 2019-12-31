function makeNumber (symbols) {
  let newString = '';
  for (let i=0; i < symbols.length; i++) {
    if (parseInt(symbols[i]) || parseInt(symbols[i]) === 0) {
      newString += symbols[i];
    } 
  }
  return newString;
}

console.log(makeNumber('erer384jjjfd123'));
console.log(makeNumber('123098h76gfdd'));
console.log(makeNumber('ijifjgdj'));
