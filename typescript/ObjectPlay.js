"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Supratim",
    age: 23,
    isMarried: false
};
function print0(user) {
    console.log(user);
}
print0(User);
function print2(user) {
    console.log(user);
}
// print2(User)// we need all properties in object --> not possible
function print3(user) {
    return user; // we must return an object it is mandatory
}
console.log(print3(User));
function print4(user) {
    return { status: "success", message: "data", data: user }; // we must return an object it is mandatory with all properties
}
console.log(print4(User));
