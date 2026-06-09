let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true; 
let runnersAge = 19; 
if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if(runnersAge > 18 && registeredEarly) {
  console.log(`Your race will begin at 9:30am, your race number is: ${raceNumber}.`);
} else if (runnersAge > 18 && !registeredEarly) {
    console.log(`Your race will begin at 11:00am, your race number is: ${raceNumber}.`);
}
else if (runnersAge < 18) { 
  console.log(`Your race will begin at 12:30pm, your race number is: ${raceNumber}.`);
}

else {
  console.log("Please see the registration desk");
}
