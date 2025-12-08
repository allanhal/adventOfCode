const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8").split(" ").map(Number);

function breakingRecords(scores) {
  let highscore = undefined;
  let lowscore = undefined;

  let highCount = 0;
  let lowCount = 0;
  for (let score of scores) {
    if (highscore === undefined) {
      highscore = score;
    }
    if (lowscore === undefined) {
      lowscore = score;
    }
    if (score > highscore) {
      highscore = score;
      highCount++;
    }
    if (score < lowscore) {
      lowscore = score;
      lowCount++;
    }
  }
  return [highCount, lowCount];
}

console.log(breakingRecords(input));

//19681907
