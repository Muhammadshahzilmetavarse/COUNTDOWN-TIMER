// COUNTDOWN TIMER PROJECT
// IN THIS PROJECT WE WILL BUILD A COUNTDOWN TIMER USING DATE MODULE
// FIRSTLY WE USE THIS COMMAND = npm i date-fns
// AND AFTER WE USE THIS COMMAND = npm fund
//AND START COODING STEP NO 1

import { DifferenceInSecondsOptions, differenceInSeconds } from "date-fns";
// function for countdown timer
function* countdownTimer(second: number){
    while(second > 0){
    yield second;
    second--;
    }
        
}
// step no 2 counter initilization
let timerIterator = countdownTimer(10);

function displaycountdown(){
    let result = timerIterator.next();
    

    if(!result.done){
        const now = new Date();
        const countdownTimer = new Date(now.getTime() + (result.value* 1000))
        const remainingseconds = differenceInSeconds(countdownTimer , now)
        console.log(`Remaining Seconds:  ${remainingseconds}`)

        setTimeout(displaycountdown, 1000)

    } else{
        console.log("Countdown Complete!")
    }
}
//invoke
displaycountdown();    

    


