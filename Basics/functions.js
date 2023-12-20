function loginUserMessage(username = "sam"){
   if(!username){
        console.log(" Please Enter Username ");
        return
   }
   return `${username} just logged in`
}

console.log(loginUserMessage('hitesh'));
console.log(loginUserMessage('Sakshi'));

// Shopping cart situation - When user adding n no. of products into cart then we can use 
//  rest operator
 function calculateCartPrice(...num){
    return num;
 }

 console.log(calculateCartPrice(200,300,400,500,800,600))


 function anotherCartEx(val1,val2,...num){
      return num;
 }

 console.log(anotherCartEx(235,64,9764,94644,546,'addtocart'))

 // Passing Object as function argument 

 const usr = {
    productName: 'Computer',
    price: 50000
 }

 function handleObject(anyObject){
    console.log(`Product is ${anyObject.productName} and Price is ${anyObject.price}`);
 }

 handleObject(usr);
 handleObject({
    productName : 'ERP',
    price: 1500000
 });

 // Passing Array as an argument

 const newArr = [100,20,36,165,564,8,7];

function returnarrayValue(getArray){
    return getArray;
}
console.log(returnarrayValue(newArr));
console.log(returnarrayValue([1,5,4,86,]))




