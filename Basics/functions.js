function loginUserMessage(username = "sam"){
   if(!username){
        console.log(" Please Enter Username ");
        return
   }
   return `${username} just logged in`
}

console.log(loginUserMessage('hitesh'))