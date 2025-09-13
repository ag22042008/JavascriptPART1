//datatypes more infos
//primitive and non primitive  kis trh se data ko memory me store +ascess kiya jata h usse do categories hoti hai datatypes ki primitive or non primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
//there copy is been given to us not reference assigned in the memory when ascessed so they are primitive datatypes 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // this means empty only so thats not 0 thats why its typeof object
let userEmail;
console.log(typeof(userEmail));
const id = Symbol('123')//to uniquely identify each element will be used in projects
const anotherId = Symbol('123')//but will always generate new symbols even for same type

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)
//for using them a reference or address of their memory is provided so that means changes will directly show in 
//them also
// Array, Objects, Functions // all are the typeof object only
//in parenthesis any variables written are part of object
const details={
    name:"aditya",
    class:"csds1",
    rno:23121,
}