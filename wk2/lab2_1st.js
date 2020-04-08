//exercise #1
const compNumToTen = (myNumber) => {
    return new Promise((resolve, reject) => {
        if (myNumber > 10 ) {
            resolve(`${myNumber} is greater than 10, Success!`);
        }else{
            reject(`${myNumber} is less than 10, Error!`);
        }
    });
};

 compNumToTen(11)
 .then(result => console.log(result))
 .catch(err => console.log(err));

 
