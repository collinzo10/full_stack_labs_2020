//exercise #4
// task1
const delyedMultiply = (num) => {
setTimeout(() => {
    console.log('done');
    return num * num;
}, 500);
};

let promise3 = new Promise((resolve, reject) => {
    resolve('rabbit.. neo');
});

const delayedPromise = (num) => {
    let myPromise = new Promise((resolve, reject) => {
        resolve( setTimeout(() => {
            console.log('done');
            return num * num;
        }, 500));
    });
    };

//delayedPromise(5)
//.then(result => console.log(result));

//task2