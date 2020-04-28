export class person {
  //properties
  firstName: string;
  lastName: string;
  age: number;
  isAlive: boolean;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    isAlive: boolean = true
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAlive = isAlive;
  }
}
export let humanoidA = new person('Eva', 'Telahun', 5, true);
