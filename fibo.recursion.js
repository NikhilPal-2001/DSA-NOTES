// function ArrayReverse(Arr , i = Arr.length-1)
// {
//     if (i < 0)
//     {
//         return 
//     }
//     console.log(Arr[i])
//     ArrayReverse(Arr , i - 1 )
//     // console.log(Arr[i])
// }
// let Arr = [1,2,3,4,5]
// ArrayReverse(Arr)

function fibo( n , a = 0, b = 1, k = 2)
{
    if  (n == 0 && k ==2)
    {
        console.log(0)
    }
    if ( n >= 2 && k == 2)
    {
        console.log(0)
        console.log(1)
        
    }
    if (n == -1)
    {
        return
    }
    if (n > 2)
    {
      c = a + b
     console.log(c)
      a = b
      b = c
      fibo( n- 1 , a, b, k+1)
    } 
}
fibo (5)