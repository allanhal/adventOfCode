const fs = require("fs");
const path = require("path");
let inputs = fs.readFileSync(path.join(__dirname, "input-11.txt"), "utf8");
// inputs = inputs.split("\n");

console.log({ inputs });

function dfs(node, graph, depth = 0, visited = new Set()) {
  if (visited.has(node)) return;

  visited.add(node);

  console.log(`Node: ${node}, Depth: ${depth}`);

  for (const neighbor of graph[node]) {
    dfs(neighbor, depth + 1, visited);
  }
}

// Example graph (adjacency list)
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: ["G"],
  G: ["Z"],
  Z: [],
};

dfs("A", graph);

function parseGraph(input) {
  const graph = {};

  // 1. Process each line to build the primary structure
  const lines = input.trim().split("\n");

  lines.forEach((line) => {
    // Split "aaa: you hhh" into ["aaa", " you hhh"]
    const [node, neighborsStr] = line.split(":");

    // Clean up whitespace and split neighbors into an array
    const neighbors = neighborsStr.trim().split(/\s+/); // \s+ handles multiple spaces

    graph[node.trim()] = neighbors;
  });

  // 2. (Optional) Ensure leaf nodes (like 'out') exist in the object
  // Iterate over all values to find nodes that aren't keys yet
  Object.values(graph)
    .flat()
    .forEach((neighbor) => {
      if (!graph[neighbor]) {
        graph[neighbor] = []; // Initialize as empty array (terminal node)
      }
    });

  return graph;
}

const parsedGraph = parseGraph(inputs);
console.log(parsedGraph);

dfs("you", parsedGraph);
