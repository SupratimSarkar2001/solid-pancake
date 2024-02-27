"use strict";
// Parameter type
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
// return type
function add2(num1, num2) {
    return num1 + num2;
}
var ans = add2(1, 2);
console.log(ans);
// Void type
function add3(num1, num2) {
    console.log(num1 + num2); // as they are void we can not return anything
}
add3(1, 2);
// never type
function add4(num1, num2) {
    throw new Error("Error"); // as they are never we can not return anything
}
// Void vs Never - what is the difference
/*

Feature	                       void	                                                              never
------------------------------------------------------------------------------------------------------------------------------------------------
Meaning	         Function doesn't return a meaningful value	                Function doesn't return at all (throws error, infinite loop, etc.)

Implicit
return	         May return undefined	                                       No return statement is reachable

Use case	       Functions with side effects (logging, modifying state)     	Functions that always throw errors or never complete normally


*/
// void type function that returns undefine
function add5(num1, num2) {
    return undefined;
}
console.log(add5(1, 2));
function add6(num1, num2) {
    // return undefined  it is not possible
    throw new Error("Error");
}
console.log(add6(1, 2));
