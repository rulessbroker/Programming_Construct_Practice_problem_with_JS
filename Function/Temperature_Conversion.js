function drgFToDegC(tempF){
    let tempC = (tempF - 32) * 5/9;
    console.log(tempC + " Celcius");
}

function drgCToDegF(tempC){
    let tempF = (tempC * 9/5) + 32;
    console.log(tempF+ " Firhenite");
}
console.log("Select option \n1.drgFToDegC \n2.drgCToDegF\n");
let option = parseInt( prompt("") );
switch (option) {
    case 1:
        drgFToDegC(parseInt( prompt("Enter degF value : ")))
        break;
        
    case 2:
        drgCToDegF(parseInt( prompt("Enter degC value : ")))
        break;
    
    default:
        break;
}