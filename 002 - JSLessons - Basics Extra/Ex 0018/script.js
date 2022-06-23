"use strict";

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

isPangram(`The quick brown fox jumps over the lazy dog`);
isPangram(`Hello world`);