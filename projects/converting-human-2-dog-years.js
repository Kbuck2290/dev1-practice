// My current Age 
const myAge = 33;
// early years 
let earlyYears = 2;
earlyYears *= 10.5; 
// Later Years
let laterYears = myAge - 2;
// Dog Years 
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears); 
// My age in dog years 
let myAgeInDogYears = earlyYears + laterYears; 
// My name in lowercase
let myName = "Kyle".toLowerCase(); 
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);