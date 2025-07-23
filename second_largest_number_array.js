function SecondLargest(arr, n) {
  // Write code here
//   console.log(arr)
 let largest = -Infinity
 let second_largest =-Infinity
 let length = arr.length-1
  for (let i = 0 ; i <= length ; i++)
  {
    //   console.log(arr[i])
      if (arr[i] > largest)
      {
          second_largest = largest;
          largest = arr[i]
        //   console.log(  second_largest)
      }
       else if (arr[i] > second_largest && arr[i] != largest) 
       {
           second_largest  = arr[i];
       }
  }
  if (second_largest === -Infinity) {
  console.log("No second largest number found.");
} else {
  console.log("Second largest number is:", second_largest);
}
    //   console.log(  second_largest)
}
n = 6
arr = [3,2,1,5,6,4]
SecondLargest(arr, n)