console.log("Random number: ")
console.log(Math.floor(Math.random() * 10));

console.log("\nRandom dice number betn 1 to 6: ")
console.log((Math.floor(Math.random() * 10) % 6) + 1);

console.log("\naddition of two random dice number: ");
let randomDiceNumber1 = ((Math.floor(Math.random() * 10) % 6) + 1);
let randomDiceNumber2 = ((Math.floor(Math.random() * 10) % 6) + 1);
let addition = randomDiceNumber1 + randomDiceNumber2;
console.log(addition);