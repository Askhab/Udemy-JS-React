const arr = ["a", "b", "c"];

arr[10] = "3456";

const arrObj = {
  0: "a",
  "1": "b",
  2: "c",
  abc: {
    df: [{}, {}],
    def: {

    }
  }
};
const b = "b";

//arrObj.b = "1234";
arrObj[b] = [];

console.log(arrObj["b"]);

// const obj = {a: 1, b: 2};
const obj = {
  'Anna': 500,
  'Alice': 800
};