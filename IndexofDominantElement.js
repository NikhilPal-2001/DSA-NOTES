// Sample input
let n = 4;
let nums = [3, 6, 1, 0];

let largest = -Infinity;
let index = -1;

// Step 1: Find largest and its index
for (let i = 0; i < n; i++) {
  if (nums[i] > largest) {
    largest = nums[i];
    index = i;
  }
}

// Step 2: Check condition for all other elements
let condition = true;

for (let i = 0; i < n; i++) {
  if (i !== index && largest < 2 * nums[i]) {
    condition = false;
    break;
  }
}

// Step 3: Output result
if (condition) {
  console.log(index);
} else {
  console.log(-1);
}
