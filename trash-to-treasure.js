const smartGarbage = function (trash, bins) {
  bins[trash]++;
  return bins
}

result = smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
console.log(result);