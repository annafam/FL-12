const a = 2, b = 3, c = 8, d = 5, e = 7, f = 30, g = 58, h = 14, i = 48, j = 31, k = 29, l = 2019, m = 365, n = 10;

// Task 1

function convert () {
  let numbers = [];
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'string') {
      arguments[i] = Number(arguments[i]);
    } else {
      arguments[i] = arguments[i].toString();
    }
    numbers.push(arguments[i]);
  }
  return numbers;
}

console.log(convert('1', a, b, '4'));


// Task 2

function executeforEach (array, callback) {
  for (let i = 0; i < array.length; i++ ) {
    callback(array[i]);
  }
}

executeforEach([1,a,b], function(el) {
  console.log(el * a)
});


// Task 3

function mapArray (arr, callback) {
  let transformArr = [];
  for (let i = 0; i < arr.length; i++) {
    executeforEach(arr, function(el) {
      transformArr.push(callback(Number(el)));
    });
    return transformArr;
  }
}

console.log(mapArray([a, '5', c], function(el) { 
  return el + b 
}));


// Task 4

function filterArray (arr, callback) {
  let transformArr = [], filteredArr = [];
  executeforEach(arr, function(el) {
    transformArr.push(callback(el));
  });
  for (let i = 0; i < transformArr.length; i++) {
    if (transformArr[i]) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

console.log(filterArray([a, d, c], function(el) { 
  return el % a === 0 
}));


// Task 5

function flipOver (string) {
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
      }
      return reverseString;
}

console.log(flipOver('hey world'));


// Task 6

function makeListFromRange (range) {
  let newArr = [];
  for (let i = range[0]; i <= range[range.length-1]; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(makeListFromRange([a, e]));


// Task 7

function getArrayOfKeys (arr, value) {
  let newArr = [];
    executeforEach(arr, function(el) {
      newArr.push(el[value]);
    });
    return newArr;
  
}

const actors = [
  { 
    name: 'tommy', 
    age: 36 
  },
  { 
    name: 'lee', 
    age: 28 
  }
];
 
console.log(getArrayOfKeys(actors, 'name'));


// Task 8

function substitute (numbers) {
  return mapArray(numbers, function(el) {
    if (el < f) {
      return '*';
    }
    return el;
  })
}

console.log(substitute([g, h, i, a, j, k]));


// Task 9

function getPastDay(date, days) {
  let passedDate = new Date(date);

  passedDate.setDate(date.getDate() - days);
  return passedDate.getDate();
}

const date = new Date(l, 0, a);
console.log(getPastDay(date, 1));
console.log(getPastDay(date, a));
console.log(getPastDay(date, m)); 


// Task 10

function formatDate (date) {
  let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hours = date.getHours(),
  minutes = date.getMinutes();
  let minHours = hours < n ? '0' : '';
  let minMinutes = minutes < n ? '0' : '';
  return `${year}/${month + 1}/${day} ${minHours}${hours}:${minMinutes}${minutes}`;
}

console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date())); 
