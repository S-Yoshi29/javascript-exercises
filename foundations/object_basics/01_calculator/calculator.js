const add = (x, y) => x + y;

const subtract = (first, second) => first - second;

const sum = (arr) => arr.reduce((prev, num) => prev + num, 0);

const multiply = (arr) => arr.reduce((prev, num) => prev * num, 1);

const power = (base, exp) => base ** exp;

//自分
// const factorial = (x) => {
//   const arr = [];
//   for (let i = 1; i <= x; i++) {
//     arr.push(i);
//   }
//   return multiply(arr);
// };

//模範
// const factorial = (x) => {
//   let product = 1;
//   for (let i = 1; i <= x; i++) {
//     product *= i;
//   }
//   return product;
// };

function factorial(x) {
  if (x > 1) {
    return x * factorial(x - 1);
  } else if (x === 0 || x === 1) {
    return 1;
  } else {
    throw new Error("不適切な入力");
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
