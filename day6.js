// Write a function to truncate a string to a certain number of words

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    let splitStr = str.split(" ")
    let newStr = splitStr.splice(0, wordLimit).join(" ")

    return newStr
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
