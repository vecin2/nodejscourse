// const square = function (x) {
//   return x * x
// }

// const square = (x) => {
//   return x * x
// }

// const square = (x) => x * x
// console.log(square(4))

const event = {
  name: 'Birthday Party',
  guestList: ['David', 'Mike', 'Leti'],
  printGuestList() {
    console.log('Guest list for ' + this.name)

    this.guestList.forEach((guest) => {
      console.log(guest + 'is attending ' + this.name)
    })
  },
}
event.printGuestList()
