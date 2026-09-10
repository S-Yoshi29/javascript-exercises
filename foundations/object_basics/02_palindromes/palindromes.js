const palindromes = function (str) {
  const newStr = str.replace(/[ ,.!?]/g, "").toLowerCase();
  const arr = newStr.split("");
  const arrReverse = [];
  for (let i = arr.length; i >= 1; i--) {
    arrReverse.push(arr[i - 1]);
  }
  return (
    arr.length === arrReverse.length &&
    arr.every((item, index) => item === arrReverse[index])
  );
};

// Do not edit below this line
module.exports = palindromes;
