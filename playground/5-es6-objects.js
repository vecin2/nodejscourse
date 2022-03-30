//Object property shorthand
const name = 'David'

const age = 39

const user = {
  name,
  age,
  location: 'Philadelphia',
}

console.log(user)

// Object Destructuring
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
}

const {} = product
