var Bob; // bob has type any - we can assign any value to it
function getBob() {
    // return "Supratim";// This will work 
    // return 123 // This Also work
    // return false; // This also works fro any type
    return { name: "Supratim" };
}
Bob = getBob();
console.log(Bob);
var Mark;
function getMark() {
    return "Supratim 3"; // only string is allowed
}
Mark = getMark(); // we expect string from this function other than string we will get error
console.log(Mark);
