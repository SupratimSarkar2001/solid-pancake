// Parameter type

function add(num1: number, num2: number) {
 return num1 + num2;
}

console.log(add(1, 2))

// return type

function add2(num1: number, num2: number): number {
 return num1 + num2;
}

let ans=add2(1, 2)
console.log(ans)

// Void type
function add3(num1: number, num2: number): void {
 console.log(num1 + num2);// as they are void we can not return anything
}

add3(1, 2)

// never type
function add4(num1: number, num2: number): never {
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







// void type function can returns undefine

function add5(num1: number, num2: number): void {
   return undefined 
}

console.log(add5(1, 2))

function add6(num1: number, num2: number): never {
 // return undefined ------> it is not possible

 throw new Error("Error");
}

console.log(add6(1, 2))



export {}