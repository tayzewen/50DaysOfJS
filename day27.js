// Count the number of vowels in a string (upper and lowercase)

function getCount(str) {
    let vowelsCount = 0;
    vowelsCount = str.match(/[aeiouAEIOU]/g).length;
  
    return vowelsCount;
  }
  
  console.log(getCount("hallelujah"));