const fs = require("fs");
const path = require("path");
let inputToRead = "07";
let q = fs.readFileSync(path.join(__dirname, "input/input" + inputToRead + ".txt"), "utf8");
q = q
  .split("\n")
  .slice(1)
  .filter((_, i) => i % 2 === 1)
  .map((i) => i.split(" ").map(Number));

function minimumBribes(q) {
  let sum = 0;

  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log("Too chaotic");
      return;
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[i] < q[j]) {
        sum++;
      }
    }
  }

  console.log(sum);
}

for (let currentQueue of q) {
  minimumBribes(currentQueue);
}

console.log();
console.log("output should be:");
console.log(fs.readFileSync(path.join(__dirname, "output/output" + inputToRead + ".txt"), "utf8"));
