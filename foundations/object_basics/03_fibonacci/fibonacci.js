const fibonacci = function (x) {
  const num = Number(x);
  if (num < 0) return "OOPS";
  else if (num === 0) return 0;
  else if (num === 1 || num === 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
