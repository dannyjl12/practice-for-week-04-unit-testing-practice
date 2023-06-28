function isFive(num) {
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  if (typeof number !== "number") {
    throw new Error;
  }

  if (number%2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function myRange(min, max, step = 1) {
  let rangeArray = [];
  for (let i = min; i <= max; i += step) {
    rangeArray.push(i);
  }

  return rangeArray;
}


module.exports = { isFive, isOdd, myRange };
