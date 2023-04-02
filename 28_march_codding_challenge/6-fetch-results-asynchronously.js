async function getTodo() {
  return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json());
}

getTodo()
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
