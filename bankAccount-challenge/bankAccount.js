"use strict";
exports.__esModule = true;
var bankAccount = /** @class */ (function () {
    function bankAccount(owner, balance) {
        this.transactions = [];
        this.owner = owner;
        this.balance = balance;
    }
    bankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    bankAccount.prototype.withdrawal = function (withdrawalAmount) {
        var balAfterWD = this.balance - withdrawalAmount;
        this.balance = balAfterWD;
        this.transactions.push(withdrawalAmount);
        return withdrawalAmount;
    };
    bankAccount.prototype.deposit = function (depositAmount) {
        var balAfterDep = this.balance + depositAmount;
        this.balance = balAfterDep;
        this.transactions.push(depositAmount);
        return depositAmount;
    };
    return bankAccount;
}());
exports.bankAccount = bankAccount;
