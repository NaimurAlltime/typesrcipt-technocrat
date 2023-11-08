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
}
