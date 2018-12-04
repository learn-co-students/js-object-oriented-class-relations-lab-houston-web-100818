let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }
  setPassenger(passenger) {
    this.passengerId = passengerId;
  }
  passengers() {
    return store.passengers.filter(
      function(passenger) {
        return passenger.tripId === this.tripId;
      }.bind(this)
    )
  }
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    )
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }
  setDriver(driver) {
    this.driverId = driverId;
  }
  drivers() {
    return store.drivers.filter(
      function(driver) {
        return driver.tripId === this.tripId;
      }.bind(this)
    )
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    )
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    if (driver) {
      this.driverId = driverId;
    }
    if (passenger) {
      this.passengerId = passengerId;
    }
    store.trips.push(this);
  }
  setDriver(driver) {
    this.driverId = driverId;
  }
  setPassenger(passenger) {
    this.passengerId = passengerId;
  }
  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    )
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    )
  }
}
