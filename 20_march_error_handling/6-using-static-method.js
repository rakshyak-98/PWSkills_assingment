class Calculator {
  static add(arg1, arg2) {
    return parseInt(arg1) + parseInt(arg2);
  }
}
const result = Calculator.add(1,2)
console.log(result)
