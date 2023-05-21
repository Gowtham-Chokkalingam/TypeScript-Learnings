const superHeros: string[] = [];
const superPower: number[] = [];

// we can also define the type in another way as well

const soloMovies: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

superHeros.push("IronMan");
superPower.push(4);

allUsers.push({ name: "Gowtham", isActive: true });

export {};
