function scan(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "contraband") {
      count++;
    }
  }
  return count;
}
