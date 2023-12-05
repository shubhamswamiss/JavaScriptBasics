const mySym = Symbol('Key1');

const JsUser = {
    name:'hitesh',
    "full name" : "Hitesh Choudhary",
    [mySym] : "mykey1",
    location : 'jaipur',
    isLoggedIn : false,
    email : "hitesh@google.com",
    lastLoginDays : ['Monday','Saturday']
}

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(typeof JsUser[mySym]);
console.log(JsUser["full name"])
