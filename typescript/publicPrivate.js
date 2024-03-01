"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.hello();
    }
    Person.prototype.hello = function () {
        console.log("hello");
    };
    return Person;
}());
var ashim = new Person("Ashim", 23);
console.log(ashim.name);
