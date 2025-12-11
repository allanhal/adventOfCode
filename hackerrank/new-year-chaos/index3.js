const fs = require("fs");
const path = require("path");
let inputToRead = "-default";
let q = fs.readFileSync(path.join(__dirname, "input/input" + inputToRead + ".txt"), "utf8");
q = q
  .split("\n")
  .slice(1)
  .filter((_, i) => i % 2 === 1)
  .map((i) => i.split(" ").map(Number));

console.log(q);
