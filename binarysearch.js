let arr =[10,20,30,40,50,60,70,80,90,100]
let x = 10;

let start = 0 
let end = arr.length-1
while(true)
{
    let mid = Math.floor((start+end)/2)

    if (arr[mid] == x){
        console.log("Found at Index",mid)
        break
    }
    
    else if (arr[mid]<x) {
        start = mid + 1
    }
    
    else if (arr[mid]>x){
        end = mid - 1;
    }
}
if (start > end)
{
    console.log("Not Found")
}