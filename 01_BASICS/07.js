//numbers and maths
//part1
const score = 400 //automatically detects it to be a no 
console.log(score);
//if u are sure to explicitally convert typecast it in a number datatype u can use new keyword
const balance = new Number(100) //this explicitally declares its a number in the output 
console.log(balance);
console.log(balance.toString().length)//3characters;//but type of no here is a string that means more string properties are associated with this
console.log(balance.toFixed(2))//Returns a string representing a number in fixed-point notation.
//jb hm jaise ecommerce websites pr tax calculation bki kuch kr rhe ho to hme unhe kuch detail precision nhi bs normal values dikhani pdti hai so this fn helps in that 
const othernumber=23.8945
const othernumber2=123.8945
console.log(othernumber.toPrecision(3));
console.log(othernumber2.toPrecision(3));//rounds of 8945 to 3 significant digits
console.log(othernumber2.toPrecision(2));//use it wisely fn as gives here 2 places after in exponential
//3 -> 3 significant digits chaiye to 23 or 8945 ko fir round off to 9 
// precision fn Returns a string containing a number represented either in exponential or fixed-point//
//
//9007199254740991 number max safe integer explore in console number datatype
const hundreds=10000000
 console.log(hundreds.toLocaleString('en-IN')); //like when we are not fully counting the zeroes of our variable so it seperates 0 with help of a commaa en-in indicates in indian style commas seperated as  default style is usa 
 //Converts a number to a string by using the current or specified locale
//-----------------------------------maths--------------------//
//this is an inbult library in javascript and very useful
// console.log(Math);//not much detailed print here but will be there on console  
// console.log(Math)
// console.log(Math.abs(-4))//just converts negative  integers to positive ones and positive ones does nothing
// console.log(Math.round(3.4))//rounds to integer acc to decimal value
// console.log(Math.round(4.9))
// console.log(Math.ceil(4.9))//just like ceiling of a no greater no than 4
// console.log(Math.floor(4.7))
// console.log(Math.sqrt(4))

//imp use of Math.random fn 
console.log(Math.random());//ITS VALUE ONLY RANGES FROM 0 TO 1 
console.log(Math.floor((Math.random()*10) +1))//MIN VALUE IS 1 NOW FLOOR  ROUNDS ITT OFF TO NEAREST INT
//BUT WE ARE DESIRED TO FIND IN A RANGE LIKE 1-6 FOR A DICE SO IF WE MULTIPLY BY 10 ITS SHIFTS TO RIGHT SIDE ONE PLACE AND AGAR 0.09 IT WILL RESULT IN 0  SO BUT TO MAKE IT MORE READEABLE WE USE ()
// NOW IF WE WANT IN BTW A RANGE 
const min=10;
const max=60;
console.log("imp trick formula")
console.log(Math.floor((Math.random()*(max-min+1 ))+min));
//max-min+1 means this will help in decidingthe range of random +1 to avoid 0 and  min + ki itni value chaiye hi