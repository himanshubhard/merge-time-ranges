const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges)) throw new TypeError('ranges must be an array');
  if (typeof threshold !== 'number' || Number.isNaN(threshold)) threshold = 0;
  if (threshold < 0) threshold = 0;

  const cleaned = ranges
    .filter(r => Array.isArray(r) && r.length === 2)
    .map(([s, e]) => [Number(s), Number(e)])
    .filter(([s, e]) => Number.isFinite(s) && Number.isFinite(e))
    .map(([s, e]) => (s <= e ? [s, e] : [e, s]));

  if (cleaned.length === 0) return [];

  cleaned.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  const result = [];
  let [curS, curE] = cleaned[0];

  for (let i = 1; i < cleaned.length; i++) {
    const [s, e] = cleaned[i];
    if (s <= curE) {
      curE = Math.max(curE, e);
    } else {
      const gap = s - curE;
      if (gap <= threshold) {
        curE = Math.max(curE, e);
      } else {
        result.push([curS, curE]);
        curS = s;
        curE = e;
      }
    }
  }

  result.push([curS, curE]);
  return result;
}

module.exports = {
  mergeTimeRanges
};
