let number = parseInt(prompt());
let primearr = [];

function Nese(num) {
  let arr = [];
  for (let i = 1; num >= i; i++) {
    if (sadeEded(i)) {
      primearr.push(i);
    }
    arr.push(i);
  }
  return arr;
}

function sadeEded(numm) {
  for (i = 0; i < numm; i++) {
    if (numm % i == 0 && i != 1) {
      return false;
    }
  }
  return true;
}

console.log("listim", Nese(number));
console.log("prime arr -", primearr);
