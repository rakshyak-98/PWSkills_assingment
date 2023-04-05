console.log("variable hoisting:");
try {
  console.log(extra);
} catch (error) {
  console.log(error.message);
}

function foo(num1, num2) {
  var extra = arguments;
}

console.log(this.extra);
