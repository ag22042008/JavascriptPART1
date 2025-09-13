//COMPARISON OPERATORS 
 console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1); //THESE ARE THE SIMPLE COMPARISON OPERATORS WHICH U KNOW THE ANSWERS 
console.log("simple comparison");

//THIS IS THE COMPARISON WHERE WE USUALLY GET STRUCT DURING OUR EXEXUTION AS THEY GIVE UNEXPECTED RESULTS SO IN TYE SCRIPT IT DOES NOT ALLOWS TO COMPARE DIFFERENT DATATYPES
console.log("2" > 1);//CONVERTS 2 IN NO THEN COMPARES SO TRUE
console.log("02" > 1); ////CONVERTS 02 IN NO THEN COMPARES SO TRUE but remember to keep datatypes same for each during comparison as a rule 
console.log("nullcomparison")
console.log(null > 0);//this comparison must be avoided as they will always give unpredictable results 
//like >,>= converts null to 0  then evaluate them resulting in the answer as false and true
console.log(null == 0); //this does not converts into any type and gives answer as false so we should avoid as we cannot check always that in which form null gets converted so avoid it
console.log(null >= 0);
console.log(undefined == 0);//always false for undefined 
console.log(undefined > 0);
console.log(undefined < 0);
//strict comparison 
//checks alos wether datatypes are same and value also is same
console.log("2" === 2);// false as this is a string and number comparison