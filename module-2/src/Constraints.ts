{
  //Constraints
  const AddCourseStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Good Developer";
    return {
      ...student,
      course,
    };
  };

  const student2 = AddCourseStudent({
    id: 12,
    name: "Md. Naim",
    email: "naim@gmail.com",
    something: "something something",
  });

  //generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle;

  //
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. Naim",
    age: 23,
    address: "Gagipur",
  };

  const reslt5 = getPropertyValue(user, "name");
  const reslt6 = getPropertyValue(user, "age");
}
