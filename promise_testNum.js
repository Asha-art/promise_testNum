// 1. Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 50.

function testNum(num){

    return new Promise((resolve,reject)=>{
        if (num >50){
            resolve(num + " is greater than 50");
        } else{
            reject(num + " is less than 50");
        }
    });
};
 
testNum(80)
.then(result => console.log(result))
.catch(error => console.log(error));

// testNum(80)
// .then(result => console.log(result))
// .catch(error => console.log(error));