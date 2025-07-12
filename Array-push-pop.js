let Arr = [1,2,3,4,5]
// console.log(Arr) [1,2,3,4,5]

// push operation 
//push operation is perform Add(push) element of End. 
Arr.push(6,7,8,9); //[1,2,3,4,5] push = [1,2,3,4,5,6,7,8,9]
// console.log(Arr) //

// pop Operation 
//push operation is perform delete(pop) value End. 
Arr.pop() //[1,2,3,4,5,6,7,8,9] pop = [1,2,3,4,5,6,7,8]
Arr.pop() //[1,2,3,4,5,6,7,8] pop = [1,2,3,4,5,6,7]
Arr.pop() //[1,2,3,4,5,6,7] pop = [1,2,3,4,5,6]
// console.log(Arr) //output [1,2,3,4,5,6]
 
// unshift operation 
// Unshift operation is perform add value to start
Arr.unshift(0);//[1,2,3,4,5,6] = [0,1,2,3,4,5,6]
Arr.unshift(10);//[0,1,2,3,4,5,6] = [10,0,1,2,3,4,5,6]
// console.log(Arr); //[10,0,1,2,3,4,5,6]

// shift operation
// shift Operation is perform is delete element is start 
// Arr = [10,0,1,2,3,4,5,6]
Arr.shift()//[0,1,2,3,4,5,6]
Arr.shift()//[1,2,3,4,5,6]
Arr.shift()//[2,3,4,5,6]
Arr.shift()//[3,4,5,6]
console.log(Arr)
// console.log(Arr);//[3,4,5,6]

// includes operation
//includes operation is perform of boolean values
//console.log(Arr.includes(6)) //true
//console.log(Arr.includes(7)) //false

//indexof operation
// console.log(Arr.indexOf(6))
//console.log(Arr.indexOf(3))

//join operation 
const NewArr = Arr.join()
        // Arr = [3,4,5,6]
        console.log(NewArr);
        console.log(typeof(NewArr));
        console.log(typeof(Arr));

        // concat two Array 
    let A1 = [1,2,3]
    let A2 = [4,5,6]
    let A3 = [7,8,9]
    //console.log(A1.concat(A2,A3)) // Output = [1,2,3,4,5,6,7,8,9]

    // sort operation
    //sort operation is perform is sort in array alphabetically 
    let A4 = [9,4,7,5,2,1,6,8]
    let A5 = [];
    A5 = A4.sort()
    //console.log(A4.sort())
    // console.log(A5)

    // splice operation and 
    
    let A6 = [1,2,3,4,5,6,7,8]
   // A6.splice(2,0,11,22,33)
   // console.log(A6)

    //A6.splice(2,0,10)
    //console.log(A6) //[1,2,10,3,4,5,6,7,8]

    //A6.splice(1,6)
    //console.log(A6)// [1,8]

    // A6.slice(5)

    // console.log(A6) 


