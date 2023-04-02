function greetPeron(name) {
  debugger;
  return new Promise((resolve, reject) => {
    return typeof name == "string"
      ? resolve("Hello, ".concat(name))
      : reject("got an NONE_STRING type");
  });
}

greetPeron(2)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
