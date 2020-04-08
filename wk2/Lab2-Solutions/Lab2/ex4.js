
const delayedMultipley = (num) => {
    setTimeout(() => {
        console.log("done")
        return num *  num;
    }, 500)
}

const delayedPromise = (num) => {
    const p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(num *  num);
        }, 500)
    })
    return p;
}

const asyncPromise = async (num) => {
    const p = await new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(num *  num);
        }, 500)
    })
    return p;
}

/// short form
//const asyncPromise2 = async (num) => {
//    return await delayedPromise(num);
//}

delayedMultipley(5);

delayedPromise(5)
   .then((result) => console.log(result))

asyncPromise(6)
   .then((result) => console.log(result))

// asyncPromise2(7)
//   .then((result) => console.log(result))