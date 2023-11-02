// Destructuring

const user5 = {
  rollNo: 223213,
  name: {
    firstName: "Naimur",
    lastName: "Rahman",
  },
  address: "Gazipur",
};

const {
  rollNo,
  name: { lastName },
  address,
} = user5;

// array Destructuring :

const myFriends = ["shobo", "jahid", "lalin", "sabbir", "akash", "tushar"];

const [, , , bestFriend, ...rest] = myFriends;
