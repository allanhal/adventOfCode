const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8").split(" ").map(Number);

function kangaroo(x1, v1, x2, v2) {
  x1 = Number(x1);
  v1 = Number(v1);
  x2 = Number(x2);
  v2 = Number(v2);
  //   console.log({ x1, v1, x2, v2 });
  if (x1 < x2 && v1 < v2) return "NO";
  if (x1 > x2 && v1 > v2) return "NO";
  if (x1 === x2 && v1 === v2) return "YES";

  let max = v1 * v2;
  //   console.log(max);
  let lastDistance = undefined;
  for (let i = 0; i < max * 10; i++) {
    x1 += v1;
    x2 += v2;
    console.log({ lastDistance, x1, x2 });
    if (lastDistance === undefined) {
      lastDistance = Math.abs(x1 - x2);
    } else if (Math.abs(x1 - x2) > lastDistance) {
      return "NO";
    }
    // console.log({ x1, x2 });
    if (x1 === x2) return "YES";
  }

  return "NO";
}

console.log(kangaroo(input[0], input[1], input[2], input[3]));

//19681907
