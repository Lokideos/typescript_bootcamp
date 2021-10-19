// Because Typescript knows about Date type it can help IDE to highlight today
// type in the following format: "const today: Date"
const today = new Date()

// Because Typescript knows that today has Date type it can help IDE to highlight
// different methods, which Date type has and has not
today.getMonth()

// We did not specify type for person object, so Typescript will not assign any type to it
// But it will assign primitive types to its properties if possible
const person = {
  age: 20
}

class Color {

}

// Typescript understands that red is an instance of Color class
// Therefore it implements its interface and it can help IDE to highlight
// it in the following way: "const red: Color"
const red = new Color()
