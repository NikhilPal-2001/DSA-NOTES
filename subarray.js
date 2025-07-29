//  subarray
  let arr = [10,20,30,40]
//10,10 20, 10 20 30 , 10 20 30 40 
// 20 , 20 30 , 20 30 40 , 
// 30 , 30 40 ,
// 40 
for ( let i=0 ; i <= arr.length-1 ; i++ )//3
{
    for (let j=i+1 ; j <= arr.length ; j++)//4
    {
        console.log(arr.slice(i,j))
    }
}