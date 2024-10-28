function findAverage(array) {
  const sum = array.reduce((prev, cur) => prev + cur, 0)
  return sum / array.length;
}

export default function analyzeArray(array) {
  if (array.some((value) => isNaN(value) || value === null)) return null;

  const average = findAverage(array);
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  if (length === 0) return null;

  return { average, min, max, length };
}
