const fs = require("fs");
const path = require("path");
let inputs = fs.readFileSync(path.join(__dirname, "input-10.txt"), "utf8");
inputs = inputs.split("\n");

const inputObjects = [];

for (let input of inputs) {
  inputObjects.push({
    diagram: input.replace(/(^.*\[|\].*$)/g, ""),
    schematics: input
      .split("(")
      .slice(1)
      .map((i) => i.split(")")[0].split(",").map(Number)),
    // Not need for part 1
    // joltage: input
    //   .split("{")
    //   .slice(1)
    //   .map((i) => i.split("}")[0].split(",").map(Number)),
  });
}

let sum = 0;
for (let currentLine of inputObjects) {
  let indexesToChange = [];
  for (let i = 0; i < currentLine.diagram.length; i++) {
    if (currentLine.diagram[i] === "#") indexesToChange.push(i);
  }

  const result = solve(indexesToChange, currentLine.schematics);
  sum += result.length;
}
console.log(sum);

function solve(target, options) {
  // Convert target to a Set for easier operations
  // We use strings for the 'visited' check because Sets are objects (pass-by-reference)
  const targetKey = target.sort((a, b) => a - b).join(",");

  const queue = [
    { current: new Set(), path: [] }, // Start with empty Set
  ];

  const visited = new Set();
  visited.add("");

  while (queue.length > 0) {
    const { current, path } = queue.shift();

    // 1. Check if we reached the target
    // We convert to array -> sort -> string just for the comparison
    const currentArray = Array.from(current).sort((a, b) => a - b);
    if (currentArray.join(",") === targetKey) {
      return path.sort((a, b) => a - b);
    }

    // 2. Try applying every option
    for (let i = 0; i < options.length; i++) {
      const optionSet = new Set(options[i]);

      // --- THE MAGIC PART ---
      // Instead of writing a loop, we just call the native method.
      // It returns a NEW Set containing items that are in either set, but not both.
      const nextSet = current.symmetricDifference(optionSet);
      // ----------------------

      // Create a key to check if we've seen this state before
      const nextArray = Array.from(nextSet).sort((a, b) => a - b);
      const nextKey = nextArray.join(",");

      if (!visited.has(nextKey)) {
        visited.add(nextKey);
        queue.push({
          current: nextSet,
          path: [...path, i],
        });
      }
    }
  }

  return null;
}
