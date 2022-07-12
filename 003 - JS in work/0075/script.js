'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}`);
  };
}

class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
  exit() {
    console.log(`Пользователь ${this.name} ушел!`);
  }
}

User.prototype.exit = function(name) {
  console.log(`Пользователь ${this.name} ушел!`);
};

const ivan = new User(`Ivan`, 28);
const alex = new User(`Alex`, 20);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();

console.log(ivan);
console.log(alex);