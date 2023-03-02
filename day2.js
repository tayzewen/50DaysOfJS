// Write a program to reverse a string

const str = "JavaScript is awesome"

function reverseAString(str) {
    let strToArray = Array.from(str);
    let reverseArray = strToArray.reverse();
    let reverseStr = reverseArray.join("");

    return reverseStr
}

console.log(`Reversed string is: ${reverseAString(str)}`)