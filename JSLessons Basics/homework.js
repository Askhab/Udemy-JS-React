function factorial(number) {
  if (number === 1) {
    return number;
  } else {
    number *= factorial(number - 1);
    return number;
  }
}

console.log(factorial(5));