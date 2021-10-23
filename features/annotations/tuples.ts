const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

const pepsiArray = ['brown', true, 40]

// Tuple type annotation
const pepsi: [string, boolean, number] = ['brown', true, 40]
pepsi [0] = 40 // error, because in tuples order of elements is important

// Type alias for the tuple type annotation
type Drink = [string, boolean, number]

// Now we can use type aliases for tuple type annotations
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]
