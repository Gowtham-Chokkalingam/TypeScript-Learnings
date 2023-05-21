// this uninon allow us to define the all the expected data types we need to use in the variables

let score: number | string | boolean = 33;

score = "Gowtham";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let userDetails: User | Admin = {
  name: "Gowtham",
  id: 1888,
};

userDetails = { userName: "Chokkalingam", id: 8284 };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  if (typeof id === "number") {
    id = id + 2;
  }

  console.log("DB id is:", id);
}

getDbId(4);
getDbId("44");

// In array unions
const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];

// if we want that our array should contains mixed of number and string then we need the union type of delaration i.e.

const dataMix: (string | number)[] = ["Gowtham", 12, "Chokkalingam", 4];

// Also we can mix the more than two data typs aswell

const dataMix2: (string | number | boolean)[] = ["Gowtham", 12, "Chokkalingam", 4, true];
