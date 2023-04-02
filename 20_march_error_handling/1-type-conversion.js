function convertToNumber(str) {
    let number = Number(str)
    debugger
  try {
    if (Number.isNaN(number)) {
      throw new Error();
    } else {
      return number;
    }
  } catch (error) {
    return "invalid number";
  }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));
