
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `Model: ${this.model} Engine ${this.year}`;
    }
  }
  

  
  // SUBCLASSES;
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year);
      this.balance = balance;
    }
  
    info() {
      return `${this.model} has a balance of $${this.balance}.00`;
    }
  }
  // Class 
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details());
  // Subclass - extends Car super class
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());

  // Output
  //Model: Pontiac Firebird Engine 1976
  // Volvo SD has a balance of $30000.00

  