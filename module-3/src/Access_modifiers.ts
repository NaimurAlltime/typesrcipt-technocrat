{
  //Access modifiers
  class BankAccount {
    readonly id: number;
    name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }

    getBalance() {
      return this.balance;
    }
  }

  const user1 = new BankAccount(123, "Mr. x", 4000);
  //   user1.id = 343;
  //   user1.balance = 3253;
  user1.addDeposit(500);
  const res1 = user1.getBalance();
  console.log(res1);

  //
}
