let SCORE =10
// BUT IF LIKE IN FRONTEND SOMEONE SENDS THE AN VALUE LIKE  33AB AND SO ON EXAMPLE SO IF WE ARE CONFIRMED THAT WE ARE WORKING WITH NOS SO WE CAN CONVERT THEM USING DESIRED DATA TYPE//
console.log(typeof SCORE)
console.log(typeof (SCORE));
// NOW if we want to convert the overall any datatype to no so we can 

let valueInNumber = Number(SCORE)
console.log(valueInNumber)
//BUT IF WE GET ANY VALUE OF STRING OR NO SO LIKE 33AB THEN WE ARE CONVERTING IT INTO AN NUMBER SO NOW WE HAVE TO AGAIN CHECK IT AS THIS WILL CONVERT IT INTO A NAN NOTANUMBER SO WHICH IS NOT A GOOD PRACTICE
// "33" => 33
// "33abc" => NaN AS IT COULDNOT CONVERT IT INTO A STRING FULLY SO BUT AVOID THESE TYPE OF CONVERSIONS AS IT ALWAYS RESULTS IN CONFUSION
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);