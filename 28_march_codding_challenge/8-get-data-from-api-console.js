async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data
}

async function logfetch(){
  const log = await getPosts();
  console.log(log)
}

logfetch()