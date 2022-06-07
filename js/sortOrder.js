const str1 = process.argv[2].toLowerCase();
const str2 = process.argv[3].toLowerCase();

if (str1 < str2) {
  console.log(-1);
} else if (str1 === str2) {
  console.log(0);
} else {
  console.log(1);
}
