console.log("hello");
var bigNumber = "13";
var smallNumber = "4";
var subtract = function (num1, num2) {
    var arrNum1 = num1.split("");
    var arrNum2 = num2.split("");
    var carry = 0;
    var count = 0;
    var length = Math.max(arrNum1.length, arrNum2.length);
    var arr = [];
    while (count < length) {
        var diff = parseInt(arrNum1.pop() || "0") - parseInt(arrNum2.pop() || "0") - carry;
        if (diff < 0) {
            carry = 1;
            diff += 10;
        }
        else {
            carry = 0;
        }
        arr.push(diff);
        count++;
    }
    return arr.reverse().join("");
};
console.log(subtract(bigNumber, smallNumber));
