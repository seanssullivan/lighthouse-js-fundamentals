function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }
  if (start > end || step <= 0) {
    return [];
  }

  newArray = [];
  for (let i = start; i <= end; i += step) {
    newArray.push(i);
  }
  return newArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));