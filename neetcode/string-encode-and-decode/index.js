let input = [""];

function encode(strs) {
  if (strs.length === 0) return "";
  return strs.join(" ");
}

function decode(str) {
  if (str.length === 0) return [];
  return str.split(" ");
}

const encoded = encode(input);
const decoded = decode(encoded);

console.log(decoded === input);
