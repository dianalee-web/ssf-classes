"use strict";
exports.__esModule = true;
var bankAccount = /** @class */ (function () {
    function bankAccount() {
    }
    //   constructor() {};
    bankAccount.prototype.getBalance = function () {
        this.transactions.push(this.balance);
        return "Account Balance: " + this.balance + ".";
    };
    bankAccount.prototype.withdrawal = function (withdrawalAmount) {
        var balAfterWD = this.balance - withdrawalAmount;
        this.transactions.push("Withdrawal Amount: " + withdrawalAmount + ", New Balance: " + balAfterWD);
        return balAfterWD;
    };
    bankAccount.prototype.deposit = function (depositAmount) {
        var balAfterDep = this.balance + depositAmount;
        this.transactions.push("Deposit Amount: " + depositAmount + ", New Balance: " + balAfterDep);
        return balAfterDep;
    };
    return bankAccount;
}());
exports.bankAccount = bankAccount;
