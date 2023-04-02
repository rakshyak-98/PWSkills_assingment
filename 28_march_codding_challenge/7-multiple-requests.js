async function fetchmultiple() {
  const [todores, postres] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
  ]);
  const todo = await todores.json()
  const post = await postres.json()

  const combined = {todo, post}
  console.log(combined)
}

fetchmultiple();
