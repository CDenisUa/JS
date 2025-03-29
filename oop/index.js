'use strict'

const User = function( name, password) {
    this.name = name;
    this.password = password;
};

const user1 = new User('Denys', '123');

/*
    What is operator new ?
    1. Create an empty object
    2. Calls User function
    3. this - is new object where we are able to add some fields like name or password
    4. Object will relate to prototype
    5. Return object back
*/

User.prototype.changeName = function (name) {
    this.name = name;
};

user1.changeName('Petro');
console.log(' user1', user1);
console.log( 'user1.__proto__ ', user1.__proto__);
console.log(' user1.__proto__ === User.prototype ',user1.__proto__ === User.prototype);
console.log(' User is prototype of object user1? ',User.prototype.isPrototypeOf(user1));
