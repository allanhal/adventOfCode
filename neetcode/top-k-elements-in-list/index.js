const fs = require("fs");
const path = require("path");
let inputToRead = "00";
let input = fs.readFileSync(path.join(__dirname, "input/input" + inputToRead + ".txt"), "utf8");
input = input.split("\n");

const nums = input[0].split(",").map(Number);
const k = Number(input[1]);

console.log({ nums, k });

console.log(topKFrequent(nums, k));

function topKFrequent(nums, k) {
  let toReturn = {};
  for (let num of nums) {
    if (!toReturn[num]) {
      toReturn[num] = 0;
    }
    toReturn[num] = toReturn[num] + 1;
  }

  return Object.keys(toReturn)
    .map((i) => [i, toReturn[i]])
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((i) => Number(i[0]));
}
