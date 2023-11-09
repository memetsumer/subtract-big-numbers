console.log("hello");

let bigNumber = "13";
let smallNumber = "4";

const subtract = (num1: string, num2: string): string => {
  let arrNum1 = num1.split("");
  let arrNum2 = num2.split("");
  let carry = 0;
  let count = 0;
  let length = Math.max(arrNum1.length, arrNum2.length);
  let arr: Number[] = [];
  while (count < length) {
    let diff =
      parseInt(arrNum1.pop() || "0") - parseInt(arrNum2.pop() || "0") - carry;

    if (diff < 0) {
      carry = 1;
      diff += 10;
    } else {
      carry = 0;
    }
    arr.push(diff);
    count++;
  }

  return arr.reverse().join("");
};

console.log(subtract(bigNumber, smallNumber));
