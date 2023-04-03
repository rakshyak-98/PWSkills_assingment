let DELAY = 3;
console.log(`Random number will be generated in ${DELAY} sec`);
const interval_id = setInterval(() => {
  console.log(DELAY--);
}, 1000);

setTimeout(() => {
  const random_num = Math.floor(Math.random() * 10000);
  clearInterval(interval_id);
  console.log(random_num);
}, DELAY * 1000);
