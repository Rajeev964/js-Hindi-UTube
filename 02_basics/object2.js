//const user=new Object()

const user={}

user.id="123abc"
user.name="Raju"
user.isLogin=false

const regUser={
    email:"raj@gmail.com",
     fName:{
        userName:{
            firstName:"Raju",
            lastName:"Jat"
        }
    }
}

console.log(regUser.fName.userName.firstName);

const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}

const obj3={obj1,obj2};

console.log(obj3);

const obj4=Object.assign({},obj1,obj2);
//console.log(obj4);


//spread

const obj5={...obj1,...obj2}

console.log(obj5);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLogin'));

