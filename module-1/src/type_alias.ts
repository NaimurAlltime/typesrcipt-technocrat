{
  // Type Alias
  type Student = {
    name: string;
    year: string;
    age: number;
    isMarried: boolean;
  };

  const Student1: Student = {
    name: "Naimur",
    year: "3th",
    age: 23,
    isMarried: false,
  };

  const Student2: Student = {
    name: "Sabbir",
    year: "3th",
    age: 24,
    isMarried: false,
  };

  const Student3: Student = {
    name: "Jahid",
    year: "3th",
    age: 24,
    isMarried: false,
  };

  type bestFriend1 = string;
  const bestFriend1 = 21;

  // type alias with function
  type Add = (num1: number, num2: number) => number;
  const addNumber: Add = (num1, num2) => num1 + num2;
}
