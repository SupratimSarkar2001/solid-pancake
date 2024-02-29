let Hello : string | number ; // union type
Hello = "Supratim"
console.log(Hello)
Hello = 23
console.log(Hello)

// union of two object 

type User = {
 name: string
 age: number
}

type Admin = {
 role: string
}

let sham : User | Admin;

sham = {
 name: "Supratim",
 age: 23
}
console.log(sham)

sham = {
 role: "Admin"
}
console.log(sham)

// Arrays:

let arr1 : string[] | number[]

arr1 = [1,2,3,4,5]

console.log(arr1)

arr1 = ["Supratim", "Kumar"]

console.log(arr1)

// arr1 = ["sip",1] // not possible


let arr2 : (string | number)[]

arr2 = [1,2,3,4,5]

console.log(arr2)

arr2 = ["Supratim", "Kumar",1,2,3,2]

console.log(arr2)
