let Arr = [1,2,3,4,5]
// console.log(Arr) [1,2,3,4,5]

// push operation 
//push operation is perform Add(push) value End. 
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
Arr.shift()
Arr.shift()
Arr.shift()
Arr.shift()
console.log(Arr);

