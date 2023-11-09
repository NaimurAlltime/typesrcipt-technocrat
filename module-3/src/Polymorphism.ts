{
  //Polymorphism
  class Person {
    getSleep() {
      console.log(`person sleeping everyday 8 hours`);
    }
  }

  class Teacher extends Person {
    getSleep() {
      console.log(`person sleeping everyday 7 hours`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`person sleeping everyday 6 hours`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  //   Object
  const person = new Person();
  const teacher = new Teacher();
  const developer = new Developer();

  getSleepingHours(person);
  getSleepingHours(teacher);
  getSleepingHours(developer);

  //
}
