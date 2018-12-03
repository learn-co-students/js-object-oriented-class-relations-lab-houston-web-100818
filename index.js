let driverId = 0;
let passengerId = 0;
let tripId = 0;

let store = { drivers: [], passengers: [], trips: [] };

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }

  passengers() {
    let passengersArray = [];

    this.trips().forEach(trip => {
      store.passengers.forEach(function(passenger) {
        if (passenger.id === trip.passengerId) {
          passengersArray.push(passenger);
        }
      });
    });
    return passengersArray;
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    );
  }
  drivers() {
    let driversArray = [];

    this.trips().forEach(trip => {
      store.drivers.forEach(function(driver) {
        if (driver.id === trip.driverId) {
          driversArray.push(driver);
        }
      });
    });
    return driversArray;
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }
}
