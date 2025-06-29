 function isPalindrome(s) {
  // write your code here
  let length = s.length-1
//   console.log(length)
  let sum = "";
  for (let i= length ; i>= 0  ;i--)
  {
      sum = sum +s[i];
  }
  if ( s === sum )
  {
      console.log("true")
  }
  else {
      console.log("false")
  }
//   console.log(sum);
}
let s = "madam";
isPalindrome(s);