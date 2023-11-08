{
  //Class_and_object

  //class
  class Animal {
    //    public name: string;
    //    public sound: string;

    // perameter properties
    constructor(public name: string, public sound: string) {
      //   this.name = name;
      //   this.sound = sound;
    }

    //method
    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }

  //   object
  const cat = new Animal("tiger cat 320", "mew mew");
  const dog = new Animal("the king of germany", "ghew ghew");

  cat.makeSound();
  dog.makeSound();
}
