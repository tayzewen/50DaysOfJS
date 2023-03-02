// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

const str = 'XeroX';

function getTheGapX(str) {
    let firstIndex = str.indexOf("X")
    let lastIndex = str.lastIndexOf("X")
    let gap = (lastIndex - firstIndex)

    if (firstIndex < 0) {
        return -1
    }

    return gap
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)