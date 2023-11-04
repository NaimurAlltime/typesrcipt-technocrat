// ternary operator | optional chaining | nullish operator
const age: number = 17;
if (age >= 18) {
  console.log("adult");
} else {
  console.log("not adult");
}

// ternary operator
const isAdult = age >= 18 ? "adult" : "not adult";
console.log({ isAdult });

// nalish qualising operator
const isAuth = null;
const result1 = isAuth ?? "Guest";
console.log({ result1 });

type User = {
  name: string;
  address: {
    present: string;
    permanent?: string;
  };
};

const user: User = {
  name: "naimur rahman",
  address: {
    present: "Gazipur",
  },
};

const IdentifyUser = user.address?.permanent ?? "No parmanent Address";
console.log({ IdentifyUser });

// ts-node-dev --respawn --transpile-only ./module-1/src/termonary_optnion_nulish.ts
