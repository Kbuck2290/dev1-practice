let userName ="Kyle"; 

userName ? console.log(`Hello, ${userName}`) : console.log("Hello!"); 

let userQuestion = "Will I pay off my debt soon";

console.log(`${userName} has asked - ${userQuestion}`); 

let randomNumber = Math.floor(Math.random() * 8); 

console.log(randomNumber);

let eightBall ="";

switch(randomNumber) {
  case 0: 
  eightBall = "It is certain"; 
  break;
  case 1: 
  eightBall = "It is decidedly so";
  break; 
  case 2: 
  eightBall = "YOUR DEBT FREE!!!!"; 
  break; 
  case 3: 
  eightBall = "Cannot predict now"; 
  break; 
  case 4: 
  eightBall = "Do not count on it"; 
  break; 
  case 5: 
  eightBall = "My sources say no"; 
  break; 
  case 6: 
  eightBall = "DONT Joke AROUND"; 
  break; 
  case 7: 
  eightBall = "Signs point to yes"; 
  break;
}

  console.log(`The Magic 8 Ball says, ${eightBall}.`)
