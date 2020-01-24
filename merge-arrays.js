const merge = function(arr1, arr2) {
  if (arr1.length === 0) {
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
  } else {
    for (let i = 0; i < arr1.length; i++) {
      while (arr2.length !== 0) {
        if (arr1[i] >= arr2[0]) {
          arr1.splice(i, 1, arr2.shift(), arr1[i]);
          i++;
        } else if (i == arr1.length - 1) {
          arr1.push(arr2.shift());
        } else {
          break;
        }
      }
    }
  }
  return arr1;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);