let n = 121
let first = 1
let last = parseInt(n/2)
while(first<=last)
{
    let mid = parseInt((first+last)/2)
    let x = mid * mid
    if(x == n )
        {
            console.log(mid)
            break
        } 
        else if(x>n)
        {
            last = mid + 1
        }
        else
            {
                first = mid + 1;
            }
}
