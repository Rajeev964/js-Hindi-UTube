const arr=[0,1,2,3,4,5]
console.log(arr[0]);

const hero=["raju","Motu"]

console.log(hero[2]);

arr.push(6);

console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(9)
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(9));

console.log(arr.indexOf(9));

const newArr=arr.join();

console.log(arr);
console.log(newArr);
console.log(typeof arr);
console.log(typeof newArr);

console.log("A",arr);

const A1=arr.slice(1,3);

console.log(A1);

console.log("B",arr);

const A2=arr.splice(1,3)

console.log(A2);

console.log("C",arr);

const h1=["AB","BC","DE"]

const h2=["AF","BG","DF"]

//h1.push(h2);

//console.log(h1);

//console.log(h1[3][1]);

//h1.concat(h2);

//console.log(h1);

const hA=h1.concat(h2);

console.log(hA);

const ANH=[...h1,...h2];

console.log(ANH);

const An1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

console.log(An1.flat(Infinity));

//console.log(An1.Count(6));


console.log(Array.isArray("Raju"));

console.log(Array.from("Raju"));

console.log(Array.from({name:"Raju"}));


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));








