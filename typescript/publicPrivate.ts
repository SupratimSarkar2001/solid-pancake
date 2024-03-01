class Person{
 name: string
 private age: number
 private hello(): void{
  console.log("hello")
 }
 constructor(name: string, age: number){
  this.name = name
  this.age = age

  this.hello();
 }
}

const ashim = new Person("Ashim", 23)

console.log(ashim.name)


// console.log(ashim.age)--> is not acessable as it is private property.

// ashim.hello()--> is not acessable as it is private method.





export {}