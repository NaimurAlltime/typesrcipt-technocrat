{
  //Abstraction

  // using interface
  //idea
  interface vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implements
  class Car implements vehicle1 {
    startEngine(): void {
      console.log("I am starting in a car engine");
    }
    stopEngine(): void {
      console.log("I am stopping in a car engine");
    }
    move(): void {
      console.log("I am moving in a car engine");
    }

    test() {
      console.log("I am just testing");
    }
  }

  const toyatoCar = new Car();
  toyatoCar.startEngine();

  // using abstract class

  //idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am just testing");
    }
  }

  // real implements
  class ToyotoCar extends Car2 {
    startEngine(): void {
      console.log("I am starting in a car engine");
    }
    stopEngine(): void {
      console.log("I am stopping in a car engine");
    }
    move(): void {
      console.log("I am moving in a car engine");
    }
  }

  const examplecar = new ToyotoCar();
  examplecar.stopEngine();
}
