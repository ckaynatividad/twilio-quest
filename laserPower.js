function calculatePower(arr) {
  const mult = arr.map((num) => num * 2);
  return mult.reduce((a, b) => a + b, 0);
}
