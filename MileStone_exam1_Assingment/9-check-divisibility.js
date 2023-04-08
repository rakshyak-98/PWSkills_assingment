function checkDivisibility(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) console.log(arr[i]);
    else continue;
  }
}
checkDivisibility([1, 2, 3, 4, 5, 6, 6, 7, 3, 3, 2]);
