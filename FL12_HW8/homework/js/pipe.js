function addOne (x) {
  return x+1;
}

function pipe (argument, ...functions) {
  for (let i = 0; i < functions.length; i++) {
    argument = functions[i](argument);
  }
  return argument;
}

console.log(pipe(1, addOne)); 
console.log(pipe(1, addOne, addOne)); 
