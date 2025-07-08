// Reverse Array
function ReverseArray(arr)
{
    let reverse = [];
    for (let i = arr.length-1; i >= 0; i--)
    {
        reverse.push(arr[i]);
    }
    console.log(reverse)
}
let arr = [1,2,3,4,5,6,7,8]
ReverseArray(arr);