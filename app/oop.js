'use strict';


// ES6
// Piece of code demonstrates Inheritance and 
// Encapsulation of properties (using WeakMap)
class Vehicle {
    constructor(kindof) {
	    this.kindof = kindof;
        console.log('The Base Vehicle.');
    }
	
	drive() { 
	    return '';
	}    
	
	reverse() { 
	    return '';
	}	
}

const privates = new WeakMap();
 
class Truck extends Vehicle {
    
    constructor(numberOfAxles) {
        super('Truck');
		this.numberOfAxles = numberOfAxles;
		privates.set(this, {
            temperature: 85
        });
        console.log('The Truck Vehicle.')
    }
	
	related () {
        return lookupRelatedStuff( privates.get(this) );
    }
	
	// Method Overriding
	drive() { 
	    return this.kindof + ' driving.';
	}    
	
	reverse() { 
	    return this.kindof + ' reversing.';
	} 
}

class Car extends Vehicle {
    
    constructor(numberOfDoors) {
        super('Car');
		this.numberOfDoors = numberOfDoors;
        console.log('The Car Vehicle.')
    }
	
	// Method Overriding
	drive() { 
	    return this.kindof + ' driving.';
	}    
	
	reverse() { 
	    return this.kindof + ' reversing.';
	} 
}
  
// The Base Vehicle.
// The Truck Vehicle.
// The Car Vehicle.

// Piece of code demonstrates runtime Polymorphism
class Driver {
    drive(obj) {
	    if (obj instanceof Vehicle && obj instanceof Truck) {
		    return obj.drive() + ' Truck has ' + obj.numberOfAxles + ' axles.';
		} else if (obj instanceof Vehicle && obj instanceof Car) {
		    return obj.drive() + + ' Car has ' + obj.numberOfDoors + ' doors.';
		} else if (obj instanceof Vehicle) {
		    return obj.drive();
		}		
    }
}

export { Vehicle, Truck, Car, Driver, privates }
