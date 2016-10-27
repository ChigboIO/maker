'use strict';

const Model = require('./baseModel');

class Book extends Model.book {
  whoAmI() {
    console.log(`My name is ${this.name}. I am ${this.age} years old.`);
  }
}

module.exports = Book;
