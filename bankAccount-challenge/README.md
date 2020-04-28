# Challenge One

#### Instructions

- Create a file called bankAccount.ts.
- Create and export a bankAccount class with properties: owner (owner's name), balance (amount currently in the account), transactions (an array of transaction information).

* write a method called getBalance to retrieve the current balance.

* write a method called withdrawal to withdraw a given amount.
* write a method called deposit to deposit a given amount.
* each method that impacts the balance should add on entry to the transactions array
* Your code must succesfully transpile and pass all tests.
* Convert the code to javascript by running the following command.

```
$ tsc bankAccount.ts
```

- Now test your code with

```
$ npm test -- bankAccount-challenge
```

## When finished Commmit your work

- Check git files status with

```
$ git status
```

Red files are untracked green are already tracked

- Now lets add files with the command

```
git add .
```

- Check your work before committing

```
$ git status
```

- Now lets commit all the files that were green

```
git commit -m " <your committ message>"
```

<!-- ## Continue to
[Challenge Two](https://github.com/SoftStackFactory/typescript-imports/tree/master/challenge-two) -->
