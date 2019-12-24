let a = prompt('Please enter value A').trim();
console.log('a = ' + a);
let b = prompt('Please enter value B').trim();
console.log('b = ' + b);
let c = prompt('Please enter value C').trim();
console.log('c = ' + c);

let d, x, x1, x2;
let two = 2;
let four = 4;

if ( a === '0' || isNaN(a) || isNaN(b) || isNaN(c) || a === '' || b === '' || c === '') {
  console.log('Invalid input data');
} else {
  d = b * b - four * a * c;

  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (two * a);
    x2 = (-b - Math.sqrt(d)) / (two * a);
    console.log('x1 = ' + x1, 'x2 = ' + x2);
  } else if (d === 0) {
    x = -b / (two * a);
    console.log('x = ' + x);
  } else if (d < 0) {
    console.log('No solution');
  }
}


