class Vehicle {
  // We usually initialize properties like this
  // OR in the constructor
  // color: string

  // constructor(color: string) {
  //   this.color = color
  // }

  // Shortcut for assinging arguments
  constructor(public color: string) {}

  // honk() function is available inside Vehicle
  // class or inside its children
  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

class Car extends Vehicle {
  constructor(public wheels: number, color: string){
    super(color)
  }

  // drive() function is available only inside this class
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const car = new Car(4, 'green')
car.startDrivingProcess()
