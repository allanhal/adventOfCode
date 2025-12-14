let nums = [-1, 0, 1, 2, -1, -4];

function threeSum(nums) {
  console.log({ nums: [0, 1, 2, 3, 4, 5] });
  console.log({ nums });
  const set = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          set.add([nums[i], nums[j], nums[k]].sort((a, b) => a - b).join(","));
        }
      }
    }
  }
  return Array.from(set).map((i) => i.split(",").map(Number));
}

console.log(threeSum(nums));

const output = [
  [-1, -1, 2],
  [-1, 0, 1],
];
// console.log({ output });
