// Object

const user1: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "Naimur",
  middleName: "Rahman",
  lastName: "Naim",
};

const user2: {
  //   nationality: "Bangladeshi"; //literal type
  readonly nationality: string; //literal type
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarred: boolean;
} = {
  nationality: "Bangladeshi",
  firstName: "Jahid",
  lastName: "Hassan",
  isMarred: true,
};
