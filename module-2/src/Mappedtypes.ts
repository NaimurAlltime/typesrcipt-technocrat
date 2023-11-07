{
  //Learn Mapped types

  //   normal map
  const numbers = [32, 23, 34, 45];
  numbers.map((number) => console.log(number.toString()));

  type AreaNumber = {
    height: number;
    width: number;
    excel: boolean;
  };

  type Height = AreaNumber["height"]; // look-up type

  //   Mapped types:
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  //   map type use in generics
  const area1: AreaString<{ height: string; width: number; excel: boolean }> = {
    height: "100",
    width: 50,
    excel: true,
  };

  //
}
