
const sym=Symbol("Key1");

const user={

    "fullName":"Me",

    sym:"Raju",
    name:"Raj",
    age:18,
    location:"Jaipur",
    email:"raju@gmail.com"
}

//console.log(typeof sym);
//console.log(user.sym);
//console.log(user["sym"]);
//console.log(user.fullName);
//console.log(user.email);
//console.log(user.name);
//console.log(user.location);

//console.log(user["fullName"]);

user.email="gar@gmail.com";

//console.log(user.email);

//Object.freeze(user);

//user.email="Godara@gmail.com";

//console.log(user.email);

user.greeting=function(){
    console.log("Hello");
}

console.log(user.greeting());
console.log(user.greeting);


user.greeting2=function(){
    console.log(`Hello ,${this.name}`);
}
console.log(user.greeting2());