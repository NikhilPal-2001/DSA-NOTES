//     #
//    ##
//   ###
//  ####
// #####
let n = prompt("Enter the Number=")
n= parseInt(n);
for (let i = 0 ; i <= n ; i++ )
{
let sum = ""
for (let a = 0; a < n-i; a++)
{
    sum = sum + " "
}
for (let j =0 ; j<= i ;j++)
{
    sum = sum +"#"
    
}
console.log(sum)
}