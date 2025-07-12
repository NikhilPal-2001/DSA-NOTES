//Find the index value of 10 
Arr = [10,20,30,40,50,10,30,50,60,10]
Arr1 = []; 
for (let i = 0 ; i <= Arr.length-1 ; i++)
{
        if (Arr[i] === 10)
        {
            Arr1.push(i)
            
//            console.log(Arr1)
        }
 }
   console.log(Arr1)