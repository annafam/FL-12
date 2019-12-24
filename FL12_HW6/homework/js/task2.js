let a = prompt('Please enter triangle side A length');
let b = prompt('Please enter triangle side B length');
let c = prompt('Please enter triangle side C length');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Input values should be ONLY numbers ');
} else if ( a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length ');
} else {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log('Triangle doesn’t exist');
  } else {
    if (a === b && a === c && b === c) {
      console.log('Equilateral triangle');
    } else if ( a === b || a === c || b === c ) {
      console.log('Isosceles triangle');
    } else {
      console.log('Scalene triangle');
    }
  }
}




