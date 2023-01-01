// prints a table of the powers of 2 that are less than or equal to 2^n.
let n=prompt("enter value for n ");

for (let i = 1; i <= n; i++) {
    console.log(Math.pow(2,i));    
}