// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;
const y = "l";

console.log("holaaay");
addEventListener("DOMContentLoaded", (e) => {
  const title = document.querySelector("h1");
  title.style.color = "red";
});

const array1 = [4, 6, 7, 8, 1, -3];
const array2 = [24, 66, 9, 6, -4];

const array3 = array1.concat(array2);

function min(array) {
  min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] != "number") continue;

    if (array[i] < min) min = array[i];
  }
  return min;
}

function max(array) {
  max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] != "number") continue;

    if (array[i] > max) max = array[i];
  }
  return max;
}

console.log(max(array3));
