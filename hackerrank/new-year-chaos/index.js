const fs = require("fs");
const path = require("path");
let inputToRead = "07";
let q = fs.readFileSync(path.join(__dirname, "input/input" + inputToRead + ".txt"), "utf8");
q = q
  .split("\n")
  .slice(1)
  .filter((_, i) => i % 2 === 1)
  .map((i) => i.split(" ").map(Number));

function bubbleSort(q) {
  let sum = 0;
  const n = q.length;

  let lastValue = 0;

  let threshold = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (q[j] > q[j + 1]) {
        if (lastValue !== q[j]) {
          threshold = 1;
          lastValue = q[j];
        } else {
          threshold++;
          if (threshold > 2) {
            return "Too chaotic";
          }
        }
        [q[j], q[j + 1]] = [q[j + 1], q[j]];
        sum++;
      }
    }
  }

  return sum;
}

function minimumBribes(q) {
  //   for (let i = 0; i < q.length; i++) {
  //     const bribed = q[i] - [i + 1];
  //     if (q[i] != [i + 1] && bribed > 0) {
  //       if (bribed > 2) {
  //         return "Too chaotic";
  //       }
  //     }
  //   }

  return bubbleSort(q);
}

for (let currentQueue of q) {
  console.log(minimumBribes(currentQueue));
}

console.log();
console.log("output should be:");
console.log(fs.readFileSync(path.join(__dirname, "output/output" + inputToRead + ".txt"), "utf8"));
