let input = prompt("This Number Is Armstrong= ")// 370
let length = input.length //3
let n = parseInt(input) //370 
// let thousand = math.floor(n/10) //3
// let hundrad = math.floor((n%10)/10)//7
// let once = math.floor(((n%10)%10)/10)
let sum=0;
for (let i = 0 ; i <= input.length-1 ; i++)
{
    let temp = parseInt(input[i]);
    sum = sum + Math.pow(temp ,length)
    
}
// console.log(sum)
if (sum == n)
{
console.log("Yes")    
}
else {
    console.log("NO")
}
