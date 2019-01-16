
function Car(make, model, color, miles) { //Constructor function
    this.make = make;
    this.model = model;
    this.color = color;
    this.miles = miles;
}

class Garage{ //Class
    constructor(name,location, size, owner){
        this.name = name;
        this.location = location;
        this.size = size;
        this.owner = owner;
        this.cars = [];
    }

    carBuilder(make, model, color, miles){ //Method
       const newCar = new Car(make, model, color, miles);
       this.cars.push(newCar);
    }
}

let carLoop = true;
const newGarage = new Garage(prompt("Name of Garage"), prompt("Location of Garage"), prompt("Size of Garage"), prompt("Owner of Garage"))

while (carLoop === true) {
    newGarage.carBuilder(prompt("What make is your car?"), prompt("What model is your car?"), prompt("What color is your car?"), Number(prompt("How many miles has your car been used for?")));
        
    if (prompt("Type e to EXIT, else click to continue adding cars") === "e"){
        carLoop = false;
    }  

    console.log(newGarage.cars);
} 

