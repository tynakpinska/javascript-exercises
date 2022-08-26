const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const sum = arr => arr[0] ? arr.reduce((prev, curr) => prev + curr) : 0;

const multiply = arr => arr[0] ? arr.reduce((prev, curr) => prev * curr) : 0;

const power = (a,b) => Math.pow(a, b);

const factorial = num => {
  if (num === 0) return 1;
  let result = 1;
  for (let i = 1; i <= num; i ++) {
    result *= i;
  }
  return result;
  
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
