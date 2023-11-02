// spread operator

const webLng: string[] = ["html", "css", "js"];
const androidLng: string[] = ["java", "kotlin", "fluter"];
webLng.push(...androidLng);

// object
const user3 = {
  name: "akash",
  address: "Kisorganj",
};

const user4 = {
  name: "tushar",
  address: "gazipur",
};

const userList = {
  ...user3,
  ...user4,
};

const groupFriend = (...friends: string[]) => {
  friends.forEach((friend) => `this is ${friend}`);
};

groupFriend("asif", "rony", "rocky");
