"use strict";

function amountOfPages(summary){
  let str = ``;
  let num = 0;

  while (str.length !== summary && summary) {
    num ++;
    str += num;
  }

  if (str.length === summary) {
    return num;
  }
}

amountOfPages(5);
amountOfPages(25);
amountOfPages(1095);
amountOfPages(185);