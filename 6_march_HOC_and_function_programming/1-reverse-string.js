function reverseAfterDelay(str) {
  setTimeout(() => {
    console.log(str.split('').reverse().join(''));
  }, 2000);
}
reverseAfterDelay("rakshyak");
