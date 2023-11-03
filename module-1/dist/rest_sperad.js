"use strict";
// spread operator
const webLng = ["html", "css", "js"];
const androidLng = ["java", "kotlin", "fluter"];
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
const userList = Object.assign(Object.assign({}, user3), user4);
const groupFriend = (...friends) => {
    friends.forEach((friend) => `this is ${friend}`);
};
groupFriend("asif", "rony", "rocky");
