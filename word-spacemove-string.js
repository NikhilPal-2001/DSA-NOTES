let str = " Ram   is    dancing   "
str =str + " ";
let  word = "";

for ( let t of str)
{
    if (t != " ")
    {
        word = word + t;
    }
    else if (t == " " && word != "")
    {
        console.log(word)
        word = ""
    }
}