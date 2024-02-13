// let myName = 'abc   '
// console.log(myName.length);

let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh();
// myHeros.hitesh();
// myHeros.heyHitesh();
// heroPower.heyHitesh();

// inheritance

const User = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax , TeachingSuport can access Teacher prototype by inheritance

Object.setPrototypeOf(TeachingSupport,Teacher)

console.log("teaching support", TeachingSupport);
console.log("teacher",Teacher);

let anotherUsername = "ChaiAurCode   ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length of ${this} is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh   ".trueLength();
"shubham  ".trueLength();





