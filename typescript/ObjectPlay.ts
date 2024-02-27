let User={
 name: "Supratim",
 age: 23,
 isMarried: false
}

function print0(user){
  console.log(user);
}

print0(User)

function print2(user : {name:string, age: number , isMarried: boolean, city:string}):void{
 console.log(user);
}

// print2(User)// we need all properties in object --> not possible

function print3(user: {name:string, age: number , isMarried: boolean}):{}{
  return user; // we must return an object it is mandatory
}

console.log(print3(User))

function print4(user: {name:string, age: number , isMarried: boolean}):{status:string, message:string, data:{}} {
 return {status:"success", message:"data", data:user} // we must return an object it is mandatory with all properties
}

console.log(print4(User))

export {}