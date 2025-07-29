function solve(n , i = 1) {
  // Your code here
  if (i > n )
  {
      return
  }
  console.log('*'.repeat(i));
  solve(n, i +1)
}
solve(5)