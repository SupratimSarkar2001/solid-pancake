"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var school1 = {
    name: "KHHS",
    address: "Kanchrapara",
    govt: true
};
console.log(school1);
// let school2: School = {
//  name: "KHHS",
//  address: "Kanchrapara",
// } --> Not possible as GOVT is not an optional property
var school3 = {
    name: "IGHS",
    address: "Kanchrapara",
    govt: false,
    // fees: 100 --> Not possible as fees is not present in school
};
console.log(school3);
var room1 = {
    name: "Room 1",
    capacity: 3
};
console.log(room1);
var room2 = {
    name: "Room 1",
    capacity: 3,
    price: 100
};
console.log(room2);
var creditCard = {
    creditNumber: 12345,
    creditDate: "12/12/2022",
    cvv: 123
};
console.log(creditCard);
