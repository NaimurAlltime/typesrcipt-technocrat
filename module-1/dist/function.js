"use strict";
// Function
// normal function :
function add(num1, num2) {
    return num1 + num2;
}
// arrow function :
const addNumber = (num1, num2) => num1 + num2;
// object --> function --> method
const poorUser = {
    name: "Naimur",
    balance: 0,
    addBalance(balance) {
        return `This is my balance is ${balance + balance}`;
    },
};
// map:
const array = [12, 3, 4, 5];
const newArray = array.map((element) => element * element);
