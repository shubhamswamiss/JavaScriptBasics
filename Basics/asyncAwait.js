// async keyword makes every function to return promise
 
function delay(time){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(`Resolved after ${time} milliseconds`);
      },time)
    })
}

// Async function that wait for promises to resolve sequentially
async function sequentialAsync(){
    console.log('Start');

    // Wait for each promises to resolve sequentially
    const result1 = await delay(1000);
    console.log(result1);

    const result2 = await delay(2000);
    console.log(result2);

    const result3 = await delay(3000);
    console.log(result3);

    console.log('End');
}
// Call the async function
sequentialAsync();