//OPERATIONS ON JAVASCRIPT
let value = 3
let negValue = -value
console.log(negValue);//SIMPLY CONVERTS VALUE INTO OTHER -VALUE
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3); SIMPLE OPERATIONS
let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
 console.log("1" + 2);//THIS OPERATION SOMEWHAT RESULTS IN PROBLEMS SO LIKE IT MUST BE AVOIDED LIKE SOMETIMES IT GIVES AN UNPRECEDENT RESULTS //12 RESULT
console.log(1 + "2");//HERE LIKE IT TREATS BOTH AS A STRING AND CONCATENATES THEM  ANS 12
console.log("1" + 2 + 2);//HERE SIMILARLY STRING FIRS AGAIN CONCATENATES THEM LIKE 122 AND DONT ADD  2+2 AS STRING IS FIRST
console.log(1 + 2 + "2");// HERE NOW WE WILL ADD 1+2 AS NUMBERS ARE FIRST  AND THEN CONCATENATE SO ANS WILL BE 32
console.log(+true);//IT JUST A QUICK WAY TO CONVERT BOOLEAN INTO NOS BUT SHOULD BE AVOIDED 
console.log(+"");// "" BOOLEAN RESULTS IN FALSE AND +JUST CONVERTS IT INTO A NO

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //THIS MUST BE AVOIDED AS IT MAKES CODE LESS READEABLE AND CLEAN SO AVOID IT
let gameCounter = 100
++gameCounter;
console.log(gameCounter);
//PREFIX INCREMENT
