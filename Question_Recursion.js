// function solve(n) {
//   // Your code here
//   let sum = " "
//   for (let i = 0 ; i< n ; i++)
//   {
//       sum = sum + "*"
//       console.log(sum)
//   }
// }
// solve(5)
// function product(n) {
//   // Write code here
//   if  (n == 1)
//   {
//   return 1
//   }
//      return n * product(n-1)
// }
// console.log(product(5))

// function solve(n , i = 1) {
//   // Write your code here
//   if ( i > n )
//   {
//       return
//   }
//   console.log("ACCIOJOB".repeat(1));
//     solve(n , i + 1)
// }
// solve(5)

function NumberSum(N , i = 1) {
  //Write your code here
  if (i > N )
  {
       return 0 
  } 
  
    return i + NumberSum(N , i + 1) 
}
console.log(NumberSum(5))

function printtillN(N, i = N) {
  // Write your code here
  if (i < N  || i == N)
    if (i == 0)
    {
        return 1
        console.log(1)
    }
  
  printtillN(N, i -1)
  
}
printtillN(10)


// let n = 10; // Number of terms
// let a = 0, b = 1;

// console.log("Fibonacci Series:");
// for (let i = 0; i < n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
// }

// Nth Even Fibonacci Number
function NthEvenFibonacci(n , a = 0 , b = 1 , count = 0) {
  //Write your code here
  
  if ( a < n  )
  {
      
if ( a % 2 == 0 )
{
    // console.log(a)
    console.log(count)
}
  let next = a + b
      NthEvenFibonacci(n , a = b , b = next )
  
  }
//   console.log(n)
}
let n = 10
NthEvenFibonacci(n)