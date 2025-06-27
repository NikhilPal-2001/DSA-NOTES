function  studentgrade(a)
{
    if ( a >= 25 || a >= 30)
    {
        console.log ("Greade A")
    }
    else if ( a >= 20 || a >= 25)
    {
         console.log("Grade B")
    }
    else if (a >= 15 || a >= 20)
    {
        console.log("Grade C")
    }
    else if (a >= 10  || a >= 15)
    {
        console.log("Grade D")
    }
    else if (a >= 5 || a >= 10)
    {
        console.log("grade E")
    }
    else if (a >= 0 || a >= 5)
    {
        console.log("grade F")
    }
}
let a = prompt("Enter The Score of The Student = ");
studentgrade(a);
