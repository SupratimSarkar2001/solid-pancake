interface User{
 name: string
 age: number
}

// let user: User = {
//  name: "Supratim",
//  age: 23
// }

// console.log(user)

// let user2 : User= {
//  name: "Supratim",
//  age: 23,
//  // isMarried: false --> as it was not defined
// }

interface User{
  readonly id: number
}

let user3: User = {
 name: "Supratim",
 age: 23,
 id: 1
}

console.log(user3)


interface Admin extends User{
 role: string
}

let admin: Admin = {
 name: "Supratim",
 age: 23,
 id: 1,
 role: "Admin"
}

console.log(admin)








































export {}


