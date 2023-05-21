// const user:(string|number)[]=[1,'Gowtham']

let tUser: [string, number, boolean];
tUser = ["Gowtham", 4, true];

type User = [number, string];

const newUser: User = [44, "gowtham"];
newUser[0] = 4;

// but in this case arry push can possible to work as normal js array method

export {};
