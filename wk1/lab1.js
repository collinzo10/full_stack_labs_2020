//exercise 1
let greeter = (myArray, counter) => {
    let greetText = 'Hello ';
    
     for (let element of myArray){
         console.log(greetText + `${element}`)
     }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3 );

//exercise 2
let capitalize = ([first, ... rest]) =>{
rest.unshift(first.toUpperCase());
return rest.join("");
}

console.log(capitalize("hey"));

//exercise 3
const colors = ['red', 'green', 'blue'];
const map1 = colors.map(x => capitalize(x))
console.log(map1);

//exercise 4
let values = [1, 60, 34, 30, 20, 5]
let fitlerLessThan20 = values.filter (value => value > 20)
console.log(fitlerLessThan20)

//exercise 5
// function is a function
let myArray = [1, 2, 3, 4];

const calculateSum = (array) =>{
    const reducerSum = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducerSum);
}
const calculateProduct = (array) => {
    const reducerProduct = (accumulator, currentValue) => accumulator * currentValue;
    return array.reduce(reducerProduct);
}

console.log(calculateSum(myArray));
console.log(calculateProduct(myArray));


//exercise 6

class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details() {
        return "Model: " + this.model +  " " + this.year;
    }
}

class Sedan extends Car {
    constructor(model, year, balance){
        super(model,year);
        this.balance = balance;
    }
    

    info(){

        let formatter = new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })
        return this.model + " has a balance of " + formatter.format(this.balance);
    }
}



const car2 = new Car('Pontiac Firebird Engine', 1976)
console.log(car2.details());
const sedan2 = new Sedan('Volvo SD' , 1999, 3000);
console.log(sedan2.info())
