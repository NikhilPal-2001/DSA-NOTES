// FOR only first "K" REPLACE TO 

let str = "KAKA";

let s = "";
let flag = 0;
for(let t of str){

    if (t == "K" && flag == 0){
        s = s + "P";
        flag = 1
    }
    else{
        s = s + t;
    }
}
console.log(s);

// FOR ALL "K" REPLACE TO "P".
let s1 = "";
for(let t of str){

    if (t == "K"){
        s1 = s1 + "P";
    }
    else{
        s1 = s1 + t;
    }
}
console.log(s1);