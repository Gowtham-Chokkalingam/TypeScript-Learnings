interface User {
  readonly id: number;
  email: string;
  userId: number;
  googleId?: string;

  startTrail: () => string;
  startTrail2(): number;

  getCoupon(couponCode: string, id: number): number;
}

const gowtham: User = {
  id: 22,
  email: "Gow@gamil",
  userId: 22,
  startTrail: () => {
    return "This is method";
  },
  startTrail2: () => {
    return 2;
  },
  getCoupon: (code: "hello", id: 22) => {
    return 20;
  },
};

gowtham.email = "g@gamail";
// gowtham.id=44 --> this wont allow to chagne bcz of the readOnly

export {};
