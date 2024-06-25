const user={
    username:"rajeev",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        console.log("Got user details from Database");
        console.log(`Username:${this.username}`);
        console.log(this);
    }
}

console.log(user.username)

console.log(this);

console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    return this;
}

const userOne=new User("rajeev",12,true)
const userTwo=new User("Gandhi",12,true)

console.log(userOne);
console.log(userTwo.username);
