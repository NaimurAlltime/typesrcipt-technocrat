{
  //Function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("bangladesh");

  interface ResGen {
    id: number;
    name: string;
  }
  const resGeneric = createArrayWithGeneric<ResGen>({ id: 22, name: "Naimur" });

  //createArrayWithGenericTuple
  const createArrayWithGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  interface ResGen {
    id: number;
    name: string;
  }
  const resGenericRes = createArrayWithGenericTuple<string, ResGen>("Bd", {
    id: 22,
    name: "Naimur",
  });
}
