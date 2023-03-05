const obj = { key: 1 };

function isEmpty(obj) {
    let answer;
    if (Object.keys(obj).length <= 0) {
        answer = true 
    } else if (Object.keys(obj).length > 0) {
        answer = false
    }

    return answer
}

console.log(`is empty object: ${isEmpty(obj)}`)
