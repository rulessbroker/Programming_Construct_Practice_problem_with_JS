let number =parseInt( prompt("Enter Number to check prime ") );

let isPrime = true;
for (let i = 2; i <= number/2; i++) {
    if (number % i  == 0) {
        isPrime=false;
        break; 
    }
}
if (isPrime) {
    console.log(number," id prime number");
} else {
    console.log(number," id not prime number");
}