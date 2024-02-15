class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`;
    }

}

const Obj = new User('Shubham');
Obj.logMe();
console.log(Obj.createId());