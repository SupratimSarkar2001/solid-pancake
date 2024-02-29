let tup :[string, number, boolean] = ["Supratim", 23, true]

console.log(tup)

// tup = ["Supratim", 23, true, "Kumar"]--> Not possible


type unser={
 name:string
 age:number
}

let tup2 : [unser, number, boolean] = [{name:"Supratim", age:23}, 23, true]

console.log(tup2)

tup2.push(1) // weird behavior

console.log(tup2)