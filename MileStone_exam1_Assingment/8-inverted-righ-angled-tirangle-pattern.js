for (let i = 6; i > 0; i--) {
  // print stars in each row
  for (let k = 1; k <= i - 1; k++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
