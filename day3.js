// Write a program to reverse a given integer number

const num = 3849;

function reverseGivenInteger(num) {
    let stringNum = num.toString();
    let strSplit = stringNum.split("");
    let reverseArray = strSplit.reverse();
    let joinArr = reverseArray.join("");

    return Number(joinArr)
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
