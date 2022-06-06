function scan(arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "contraband") {
      arr1.push(i);
    }
  }
  return arr1;
}
