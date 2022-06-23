"use strict";

function deepCount(a){
  let num = a.length;

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      num += deepCount(a[i]);
    }
  }

  return num;
}

console.log(deepCount([1, 5, 3]));
console.log(deepCount(["1", 5, "3", ["10"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));