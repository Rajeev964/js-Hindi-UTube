let myDate=new Date()

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

let create=new Date(2023,0,23)
console.log(create.toLocaleString());
let create1=new Date(2023,0,23,5,3)
console.log(create1.toLocaleString());
let create2=new Date("2023-01-14")
console.log(create2.toLocaleString());
let create3=new Date("01-14-2023")
console.log(create3.toLocaleString());
let create4=new Date(2023,0,23)
console.log(create4.toLocaleString());


let timeStamp=Date.now()

console.log(timeStamp);

console.log(create.getTime());

let newDate1=new Date()

console.log(newDate1.getMonth());


console.log(newDate1.getDay());
