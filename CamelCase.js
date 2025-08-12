function camelcase(str)
{
    let empty = ""
    let flag = false
     for(let i = 0 ;i <= str.length-1 ; i++)
     {
         if ( str[i] == "_")
         {
             flag = true
         }
         else if(flag)
         {
            empty += str[i].toUpperCase()
            flag = false 
         }
         else {
             empty += str[i]
         }
     }
     console.log(empty)
}
str = "how_are_you"
camelcase(str)