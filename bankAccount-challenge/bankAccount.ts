export class bankAccount {
  transactions: any[]; //number or string?
  owner: string;
  balance: number;

  constructor(owner, balance, transactions) {
    this.owner = owner;
    this.balance = balance;
    this.transactions = transactions;
  }
  getBalance() {
    this.transactions.push(this.balance);
    return `Account Balance: ${this.balance}.`;
  }
  withdrawal(withdrawalAmount: number) {
    let balAfterWD = this.balance - withdrawalAmount;
    this.transactions.push(
      `Withdrawal Amount: ${withdrawalAmount}, New Balance: ${balAfterWD}`
    );
    return balAfterWD;
  }
  deposit(depositAmount: number) {
    let balAfterDep = this.balance + depositAmount;
    this.transactions.push(
      `Deposit Amount: ${depositAmount}, New Balance: ${balAfterDep}`
    );
    return balAfterDep;
  }
}
