class Person {
 name: string
 private _age: number
 constructor(name: string, _age: number) {
   this.name = name;
   this._age = _age;
 }

 get getAge(): number {
   return this._age;
 }

 set setAge(newAge: number) {
   if (newAge >= 0) {
     this._age = newAge;
   } else {
     console.error("Age cannot be negative.");
   }
 }
}


const ashim = new Person("Ashim", 23)

console.log(ashim.name)


// console.log(ashim.age)--> is not acessable as it is private property.

// ashim.hello()--> is not acessable as it is private method.

// ashim.age = 78 --> is not acessable as it is private property.

console.log(ashim.getAge)
ashim.setAge = 78





export {}