{
  //Utility types
  type Person = {
    name: string;
    email?: string;
    IsMarried: boolean;
  };

  //   type Name = person["name"];
  //   Pick:
  type NameEmail = Pick<Person, "name" | "email">;
  //   Omit
  type Contact = Omit<Person, "email">;

  //   required :
  type PersonRequired = Required<Person>;

  //   partial
  type PersonPartial = Partial<Person>;

  //ReadOnly
  type PersonReadOnly = Readonly<Person>;

  //   Record
  type MyObj = Record<string, string>;
  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "add",
    b: "bb",
    c: "cat",
  };

  //
}
