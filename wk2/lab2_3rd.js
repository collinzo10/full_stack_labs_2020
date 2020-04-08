
//exercise #3
let promise1 = 101;
let promise2 = 'follow thw white';
let promise3 = new Promise((resolve, reject) => {
    resolve('rabbit.. neo');
});

Promise.all([promise1, promise2, promise3]).then(function(values){
    console.log(values);
});