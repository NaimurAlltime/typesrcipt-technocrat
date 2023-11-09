{
  //Access modifiers
  class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // addDeposit(amount: number) {
    //   this.balance = this.balance + amount;
    // }
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    get balance() {
      return this._balance;
    }
    // getBalance() {
    //   return this.balance;
    // }
  }

  const user1 = new BankAccount(123, "Mr. x", 4000);
  //   user1.id = 343;
  //   user1.balance = 3253;
  //   user1.addDeposit(500);
  //   const res1 = user1.getBalance(); //get value call kore
  //   console.log(res1);

  user1.deposit = 600; // set value in property
  const res1 = user1.balance; // get value property er moto kore
  console.log(res1);

  //
}
