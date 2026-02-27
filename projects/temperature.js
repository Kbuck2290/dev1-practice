// Current Temperature in kelvin degrees
const kelvin = 0; 
// Converting kelvin to Celsius
const celsius = kelvin - 273;
// Converting celsuis to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//round down fahrenheit value 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit}  degress fahrenheit.`); 

let newton = celsius * (33/100);
newton = Math.floor(newton); 
console.log(`The temperature is ${newton} degress newton`);
