"use strict";

//   1

console.log("-------Завдання-1-------");

let o = 12;

let user = {
  userName: "Eugene",
  age: 12,
  showUserrName() {
    console.log(this.userName);
    this.updateAge();
  },
  updateAge() {
    console.log(this.age);
    this.age = this.age + 1;
  },
};

user.showUserrName();
user.showUserrName();
user.showUserrName();
user.showUserrName();
//   2

console.log("-------Завдання-2-------");

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sum = salaries.John + salaries.Ann + salaries.Pete;

console.log(sum);

//   3

console.log("-------Завдання-3-------");

let calculator = {
  sum() {
    return console.log(this.a + this.b);
  },

  mul() {
    return console.log(this.a * this.b);
  },

  read() {
    this.a = +prompt("number - 1:", 0);
    this.b = +prompt("number - 2:", 0);
  },
};

calculator.read();
calculator.sum();
calculator.mul();

//  4

console.log("-------Завдання-4-------");

const cafe = {
    name: 'Republic',
    width:200,
    height: 300,
    personal:5,
    hr: true
}

console.log(Object.entries(cafe));
console.log(cafe.height * cafe.width);
