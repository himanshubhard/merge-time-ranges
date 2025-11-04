const { mergeTimeRanges } = require('./my-module.js');
// first
const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold = 200;

console.log(mergeTimeRanges(ranges, threshold));

// Second
const ranges1 = [
  [0, 10],
  [20, 30],
  [40, 50]
];
const threshold1 = 5;
console.log("Example 1:", mergeTimeRanges(ranges1, threshold1));

