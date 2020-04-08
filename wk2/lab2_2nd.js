//exercise #2
const makeUpperCase = (myArray) => {
    return new Promise((resolve, reject) => {
        myNewArray = [];

        for(let x of myArray){
            if(typeof x !== 'string'){
                reject(`Array contains non string datatypes`); 
            }
        };
        
        for(let x of myArray){
            myNewArray.push(x.toUpperCase());
        };
        if(myNewArray.length != 0){
            resolve(myNewArray);
        }
    });
 };

 const sortWords = (myArray) => {
    return new Promise((resolve, reject) => {
        //for(let x of myArray){
          //  if(typeof x !== 'string'){
            //    reject(`Array contains non string datatypes`); 
            //}
        //};
        resolve(myArray.sort());
    });
 };


makeUpperCase(['asd', 'qwe', 'zxc'])
.then(sortWords)
.then(result => console.log(result))
.catch(error => console.log(error));


makeUpperCase(['a', 123, 'zxc'])
.then(sortWords)
.then(result => console.log(result))
.catch(error => console.log(error));