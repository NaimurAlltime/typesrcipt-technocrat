{
  // generics
  type GenericsArray<T> = Array<T>;

  //   const rollNumbers: number[] = [12, 34, 5];
  const rollNumbers: GenericsArray<number> = [12, 34, 5];

  //   const friendList: string[] = ["sabbir", "jahid", "rony"];
  const friendList: GenericsArray<string> = ["sabbir", "jahid", "rony"];

  const users: GenericsArray<{ name: string; age: number }> = [
    {
      name: "Naimur ",
      age: 23,
    },
    {
      name: "Jahid",
      age: 24,
    },
  ];

  //   generics tuple
  type GenericsTuple<X, Y> = [X, Y];
  const couples: GenericsTuple<string, string> = ["Naimur", "Salma"];
  const Ages: GenericsTuple<number, number> = [23, 18];
  const infoTuple: GenericsTuple<string, { name: string; age: number }> = [
    "my_info",
    {
      name: "naimur",
      age: 23,
    },
  ];
}
