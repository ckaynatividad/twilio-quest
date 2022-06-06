const num = Number(process.argv[2]);

const tree = {
  0: "alive",
  1: "other",
  2: "other",
  3: "other",
};

if (num === 0) {
  console.log("alive");
} else {
  console.log("other");
}
