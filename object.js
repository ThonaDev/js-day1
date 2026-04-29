// object : collection of key - value pairs

"use strict"

const userInfo = {
    username: "Dudu",
    age: 21,
    email: "dudu168@gmail.com",
    isActive: true,
    address: {
        province: "Kampot",
        country: "Cambodia"
    },
    greeting: function(){
        console.log("Hello, World!");
        console.log(`Welcome, ${this.username}`);
    }
}

console.log(userInfo);
userInfo.greeting();