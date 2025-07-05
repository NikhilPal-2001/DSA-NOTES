let str = "A"
let str1 = str.charCodeAt();// 65
if (str1 >= 65 && str1 <= 90)
{
    str1 = str1 +32; 
}
else if (str1 >= 97 && str1 <= 122)
{
    str1 = str1 - 32;
}
console.log(String.fromCharCode(str1));