// prints true if day of month is between March 20 and June 20, false otherwise.
const prompt=require("prompt-sync")({sigint:true});

let date = prompt("enter date (dd)");
let month = prompt("enter month (mm)")

if (month == 03) {
    if(date >= 20){
        console.log(true);
    }else{
        console.log(false);
    }
} else if(month == 04 || month == 5){
    console.log(true);
} else if( month == 6){
    if(date <= 20){
        console.log(true);
    }else{
        console.log(false);
    }
}else{
    console.log(false);
}