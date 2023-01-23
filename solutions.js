class Triangle {
  constructor(a, b, c) {
    for (let side of [a, b, c]) {
      if (!Number.isFinite(side) || side <= 0) {
        throw new Error("Sides must be positive");
      }
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  greet() {
    console.log("HELLO From TRIANGLE");
  }
  display() {
    return `Trianlge with sides of ${this.a} and ${this.b} and ${this.c}`;
  }
  getArea() {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  isBig() {
    return this.getArea() > 50;
  }
}

// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9;
// secondTri.b = 12;

class RightTriangle extends Triangle {
  constructor(a, b, c) {
    if (a * a + b * b !== c * c) {
      throw new Error("Invalid C side for right triagnle");
    }

    super(a, b, c);
    this.hypot = c;
  }
  isRightTriangle() {
    return true;
  }
  display() {
    return "Right" + super.display();
    // super.display();
    // console.log(
    //   `Right trianlge with sides of ${this.a} and ${this.b} and ${this.c}`
    // );
  }
}

// -------------------------------------
class Vehicle {
  constructor(a, b, c) {
    this.make = a;
    this.model = b;
    this.year = c;
  }

  method() {
    return "Beep";
  }

  toString() {
    return `The vechicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(a, b, c) {
    super(a, b, c);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(a, b, c) {
    super(a, b, c);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

class Garage {
  constructor(a) {
    this.vehicles = [];
    this.capacity = a;
  }
  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, were full";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
