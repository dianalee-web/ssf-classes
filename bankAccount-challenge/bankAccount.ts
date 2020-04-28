export class bankAccount {
  transactions: number[] = [];
  owner: string;
  balance: number;

  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  getBalance() {
    return this.balance;
  }
  withdrawal(withdrawalAmount: number) {
    let balAfterWD = this.balance - withdrawalAmount;
    this.balance = balAfterWD;
    this.transactions.push(withdrawalAmount);
    return withdrawalAmount;
  }
  deposit(depositAmount: number) {
    let balAfterDep = this.balance + depositAmount;
    this.balance = balAfterDep;
    this.transactions.push(depositAmount);
    return depositAmount;
  }
}
