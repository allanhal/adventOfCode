const fs = require("fs");
const path = require("path");
let inputToRead = "1";
let q = fs
  .readFileSync(path.join(__dirname, "input/input" + inputToRead + ".txt"), "utf8")
  .split(",")
  .map(Number);

var removeDuplicates = function (nums) {
  let leftPointer = 1;
  for (let rightPointer = 1; rightPointer < nums.length; rightPointer++) {
    if (nums[rightPointer] !== nums[rightPointer - 1]) {
      nums[leftPointer] = nums[rightPointer];
      leftPointer++;
    }
  }
  return leftPointer;
};

const len = removeDuplicates(q);
console.log();
console.log("current output:");
console.log(len);
console.log(q.slice(0, len));

console.log();
console.log("output should be:");
console.log(fs.readFileSync(path.join(__dirname, "output/output" + inputToRead + ".txt"), "utf8"));
