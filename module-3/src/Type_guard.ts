{
  // Type guard using typeof

  type Alphanumeric = string | number;

  const addNumber = (
    param1: Alphanumeric,
    param2: Alphanumeric
  ): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const res1 = addNumber("2", "4");
  console.log(res1);

  //in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal",
  };

  const adminUser: AdminUser = {
    name: "Mr. AdminUser",
    role: "admin",
  };

  getUser(adminUser);

  //
  // Type guard using instance of
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("making Barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    catMew() {
      console.log("making Mewing");
    }
  }

  // use in instanceof
  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.catMew();
    } else {
      animal.makeSound();
    }
  };

  // object
  const dog = new Dog("Dog vhai", "dog");
  const cat = new Cat("Cat vhai", "cat");

  getAnimal(dog);

  //
}
