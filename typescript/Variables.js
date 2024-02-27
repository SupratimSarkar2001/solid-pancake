"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MY_NAME = "Supratim";
console.log(MY_NAME);
// MY_NAME=123; -- NOT POSSIBLE
var MY_AGE = 23;
console.log(MY_AGE);
MY_AGE = 23.5; // POSSIBLE
console.log(MY_AGE);
// MY_AGE="Supratim"; -- NOT POSSIBLE
var MY_IS_MARRIED = false;
console.log(MY_IS_MARRIED);
// Type Inference  - TypeScript infers the type of a variable based on the value assigned to it. so we can omit the type of variable if we want to
var name = "Supratim";
console.log(name);
