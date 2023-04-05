console.log("function expression:");
try {
  // INFO: used try catch so the script do not stop further execution of code.
  console.log(multiplyNumbers(3, 3));
} catch (error) {
  console.log(error.message);
}
const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};