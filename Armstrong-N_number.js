function isArmstrong(num) {
  let sum = 0;
  let temp = num;
  let digits = num.toString().length;

  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

function armstrongInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isArmstrong(i)) {
      console.log(i);
    }
  }
}

// Example usage:
armstrongInRange(1, 1000)