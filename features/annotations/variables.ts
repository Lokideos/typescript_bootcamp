// Variable apple can only be a number
let apples: number = 5

// Variable speed can only be a string
let speed: string = 'fast'

// Variable hasName can only be a boolean
let hasName: boolean = true

// Variable nothingMuch can only be a null
let nothingMuch: null = null

// Variable nothing can only be a undefined
let nothing: undefined = undefined

// built in objects
// Variable nothing can only be of type Date
let now: Date = new Date()

// Array of strings only
let colors: string[] = ['red', 'green', 'blue']

// Array of numbers only
let myNumbers: number[] = [1,2,3]

// Array of boolean values only
let truths: boolean[] = [true, true, false]

// Classes
class Car {

}

// We are creating an instance car
// which is of type Car and is instance of class Car
let car: Car = new Car

// Object literal type annotation
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function type annotation 
// This is annotation for a variable
// which represents a function - not for the function itself
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
