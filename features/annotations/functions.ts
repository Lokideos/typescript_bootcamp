// Arrow function type annotation
const add = (a: number, b: number): number => {
  return a + b
}

// We always want to manually annotate the return value
// Or it might lead to errors like this one,
// which Typescript will not correct
const substract = (a: number, b: number) => {
  a - b
}


// Default function type annotation
function divide(a: number, b: number): number {
  return a / b
}

// Anonymus function type annotation
const multiply = function (a: number, b: number): number {
  return a * b
}

// Type annotation for function, which will return
// null or undefined
const logger = (message: string): void => {
  console.log(message)
}

// Type annotation for function, which will not
// return anything - 
// the control flow will be interrupted at some point
const throwError = (message: string): never => {
  throw new Error(message)
}

// Desctructuring with type annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date)  
  console.log(weather)  
}
logWeather(todaysWeather)


