// prints a table of the powers of 2 that are less than or equal to 2^n.
let n=prompt("enter value for n ");

let i = 1
while(i <= n){
    console.log(Math.pow(2,i));
    i++ 
}