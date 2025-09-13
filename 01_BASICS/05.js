//memory types and allocation in them
//like there are two types of memory
//1.stack memory ->this is declared for primitive datatypes and  in this only a copy of value is given  like variables are declared in stack memory but when assigned only reference of a copy is given
let isaccountno=2345642;
let isid=isaccountno //here copy of a value isaccountno is assigned 
isid=25222004 //here we changed the value ofisid but will it change isaccountid --no as copy of value is assigned so it does not changes the value of isaacountno
console.log(isaccountno);
console.log(isid);
//heap memory(for object types like arrays ,fns,objects)
// in this the reference of the each declared datatype is passed 
let isLoggedIn={
    currentstatus:"Active",
    accountactiveness:"frequently"
}
let isSession=isLoggedIn;//gets the reference (address)ofthe same value now 
isSession.currentstatus="offline"
//this will change in isSession will it change in original ans yes as this will be also pointing to same address in heap memory so it changes and their variables are declared in stack pointing to heap memory

