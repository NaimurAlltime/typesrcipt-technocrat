// Function

// normal function :
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// arrow function :
const addNumber = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method
const poorUser = {
  name: "Naimur",
  balance: 0,
  addBalance(balance: number): string {
    return `This is my balance is ${balance + balance}`;
  },
};

// map:
const array: number[] = [12, 3, 4, 5];
const newArray: number[] = array.map(
  (element: number): number => element * element
);
