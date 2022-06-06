function calculateMass(str) {
  return str.reduce((a, b) => a + b.length, 0);
}
