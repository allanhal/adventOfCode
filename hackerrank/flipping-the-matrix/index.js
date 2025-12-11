const fs = require("fs");
const path = require("path");
let inputToRead = "00";
let q = fs.readFileSync(path.join(__dirname, "input/input" + inputToRead + ".txt"), "utf8");
let matrix = q
  .split("\n")
  .slice(2)
  .map((i) => i.split(" ").map(Number));

console.log({ matrix });

// with 2 for
const len = matrix.length;
let sum = 0;
for (let i = 0; i < len / 2; i++) {
  for (let j = 0; j < len / 2; j++) {
    sum += Math.max(matrix[i][j], matrix[i][len - j - 1], matrix[len - i - 1][j], matrix[len - i - 1][len - j - 1]);
  }
}

console.log(sum);

// with 1 for
const half = len / 2;
sum = 0;

for (let k = 0; k < half * half; k++) {
  const i = Math.floor(k / half);
  const j = k % half;

  sum += Math.max(matrix[i][j], matrix[i][len - j - 1], matrix[len - i - 1][j], matrix[len - i - 1][len - j - 1]);
}

console.log(sum);
