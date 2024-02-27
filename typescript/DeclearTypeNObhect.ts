type School={
 name: string,
 address : string,
 govt: boolean
}


let school1: School = {
 name: "KHHS",
 address: "Kanchrapara",
 govt: true
}

console.log(school1)

// let school2: School = {
//  name: "KHHS",
//  address: "Kanchrapara",
// } --> Not possible as GOVT is not an optional property


let school3: School ={
 name: "IGHS",
 address: "Kanchrapara",
 govt: false, 
 // fees: 100 --> Not possible as fees is not present in school
}

console.log(school3)


type room= {
 name: string,
 capacity: number,
 price?: number // optional property
}


let room1: room = {
 name: "Room 1",
 capacity: 3
}

console.log(room1)

let room2: room = {
 name: "Room 1",
 capacity: 3,
 price: 100
}

console.log(room2)


type CreditNumber={
 creditNumber: number
}

type CreditDate = {
 creditDate: string
}

type CreditCard = CreditNumber & CreditDate & {
 cvv: number
}

let creditCard: CreditCard = {
 creditNumber: 12345,
 creditDate: "12/12/2022",
 cvv: 123
}

console.log(creditCard)


export {}