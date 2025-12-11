const fs = require("fs");
const path = require("path");
let inputToRead = "01";
let input = fs.readFileSync(path.join(__dirname, "input/input" + inputToRead + ".txt"), "utf8");

let result = 1;
for (let i = 1; i <= n; i++) {
  result = BigInt(result) * BigInt(i);
}
console.log(BigInt(result).toString());

processData(10);

function processData(input) {
  //Enter your code here
  input = parseInt(input);

  var product = [1];
  for (var i = 1; i < input + 1; i++) {
    product = bigMultiply(product, i);
    // console.log("product:" + product);
  }
  console.log(product.join(""));

  function bigMultiply(numArray, multiplier) {
    var sum = [];
    for (var i = 1; i <= multiplier; i++) {
      sum = bigAdd(sum, numArray);
      // console.log("sum %s, numArray %s, i $s", sum, numArray, i);
    }
    return sum;
  }

  function bigAdd(numArray1, numArray2) {
    var longerArray;
    var shorterArray;
    var sum = [];

    if (numArray1.length > numArray2.length) {
      longerArray = numArray1;
      shorterArray = numArray2;
    } else {
      longerArray = numArray2;
      shorterArray = numArray1;
    }

    // reverse the array orientation so that base^i start from index 0
    longerArray.reverse();
    shorterArray.reverse();

    var carry = 0;
    for (var i = 0; i < longerArray.length; i++) {
      var a = shorterArray[i] || 0;
      var b = longerArray[i];
      var c = a + b + carry;

      carry = Math.floor(c / 10);
      var digit = c % 10;
      sum.unshift(digit);
    }
    if (carry > 0) {
      sum.unshift(carry);
    }

    // reverse the original arrays. Dirty inefficient.
    longerArray.reverse();
    shorterArray.reverse();

    return sum;
  }
}
