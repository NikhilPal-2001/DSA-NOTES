//Descending Number Pattern
//1
//21
//321
//4321
//54321
let input = prompt("Enter The number= ")//5
let n  = parseInt(input);

for (let i = 1 ; i <= n ; i++) //n = 5 
{
    let result = "";
    for (let j = i ; j >= 1 ; j--)
    {
        result = result + j 
        
    }
    console.log(result)
}
