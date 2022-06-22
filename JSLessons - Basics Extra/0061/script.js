"use strict";

// const bigint = 12132454646513215165415898989861531n;

const sameBigInt = BigInt(12132454646513215165415898989861531);

// console.log(2n === 2);

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);