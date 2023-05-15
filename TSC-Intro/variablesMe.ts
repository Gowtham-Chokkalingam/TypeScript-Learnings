//string

let greetings: string = "Gowtham";
greetings = greetings.toLowerCase();
console.log(greetings);

//number

let userId: number = 822033.504;
userId.toFixed();
console.log(userId);

// boolean

let isLogged: boolean = false;

// Functions in Type Script

function addTwo(num: number) {
  return num + 2;
}

function getUpper(str: string) {
  return str.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  return true;
}
// Passing Default values in the args
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(4);
getUpper("gowtham");

getUpper(2);

signUpUser("Gowtham", "Hello", true);
loginUser("Gowtham", "gamil.com");

export {};
