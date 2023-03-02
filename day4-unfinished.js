// Write a function which can convert the time input given in 12 hours format to 24 hours format

const time = "12:10AM";

let timeSlice = time.slice(0, 5)
console.log(timeSlice)

let timeSplit = timeSlice.split(":");
console.log(timeSplit)

let hours = parseInt(timeSplit[0]);
console.log(hours)

let minutes = parseInt(timeSplit[1])
console.log(minutes)


if (time.endsWith("AM") === true) {

}