async function fetchData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/12345678"
  );
  debugger;
  return res.status == 200 || res.status == 202
    ? res.json()
    : {
        code: "fetch_failed",
        status: res.status,
        statusText: res.statusText,
      };
}

fetchData().then((res) => console.log(res));
