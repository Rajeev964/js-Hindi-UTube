const user={
    username:"hitesh",
    price:999,
    
        welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);

        console.log(this);
    }
}

//user.welcomeMessage;

//user.welcomeMessage();
//user.username="sam"

//user.welcomeMessage();

console.log(this);

function chai(){
    let user1="raju"
    console.log(this)

    console.log(this.user1);
}
chai();

const add2=(num1,num2)=>{

    return num1+num2;
}
console.log(add2(3,4))

const add3=(num1,num2)=>num1+num2
console.log(add2(3,7));

const add4=(num1+num2)=>{username:"hitesh"}
