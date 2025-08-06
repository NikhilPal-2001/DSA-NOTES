function AlphabetCoverageCheck(str)
{
    
    let flag = true  
    let NewStr = str.toLowerCase()
    let Alphabet = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0;i <= Alphabet.length-1 ; i++)
    {
        if (NewStr.includes(Alphabet[i]))
        {
            flag = true      
        }
        else 
        {
            flag = false 
            break 
        }
    }
    if (flag)
    {
        console.log("pangram")
    }
    else {
        console.log("not pangram")
    }
}
str = "We promptly judged antique ivory buckles for the next prize"
AlphabetCoverageCheck(str)