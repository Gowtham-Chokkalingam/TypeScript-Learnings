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
addTwo(4);
getUpper("gowtham");

export {};
