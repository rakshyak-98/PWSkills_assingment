function calculator(num1, num2, operator) {
  let result = null;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result ? result : console.log("invalid operator");
  }
}

console.log(calculator(2, 2, "/s"));
