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

signUpUser("Gowtham", "Hello", true);
loginUser("Gowtham", "gmail.com");

// to return the most accurate value from the function

function addTwo1(num: number): number {
  return num + 2;
}

// Dealing with arrow function

const getAddTwo = (str: string): string => {
  return "Somthing";
};
addTwo1(4);

// Case when the function return nothing

function retrunNothing(msg: string): void {
  console.log(msg);
}

export {};
