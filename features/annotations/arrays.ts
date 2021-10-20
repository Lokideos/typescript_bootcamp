// Typescript automatically infers array type from the initialized value
const carMakers = ['ford', 'toyota', 'chevy']

// We want to manually add type annotation if we declare array
// for future use and set it to empty array
const exampleArray: string[] = []

// Array of dates
const dates = [new Date(), new Date()]

// Two-dimensional array - string[][]
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Type annotations for array do several things for us:
// Help with inference when extracting values
const firstCar = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
carMakers.push(10) // - throws an error

// Help with functions like 'map'
carMakers.map((car: string): string => {
  return car // - car. provides handy autocomplete
})

// Flexible types
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2030-10-10')
importantDates.push(new Date())
importantDates.push(100) // - throws an error
