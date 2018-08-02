let animals = [
  { name: 'Flufy', species: 'Rabit'},
  { name: 'Caro', species: 'Dog'},
  { name: 'David', species: 'Fish'},
  { name: 'Jimmy', species: 'Fish'},
  { name: 'Dogh', species: 'Cat'}
]

// let dogs = []

// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].species === 'Fish')
//     dogs.push(animals[i])
// }

// let isDog = function(animal) {
//   return animal.species === 'Dog'
// }

// let dogs = animals.filter(isDog)
//let anotherAnimal = animals.reject(isDog)

// console.log(dogs)

// var names = []

// for (let i = 0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }

// console.log(names)

// let names = animals.map((animal) => animal.name)

// console.log(names)

// let orders = [
//   {amount: 250},
//   {amount: 400},
//   {amount: 324},
//   {amount: 212},
//   {amount: 2323},
//   {amount: 123},
// ]

// // let totalAmount = 0

// // for (let i = 0; i < orders.length; i++) {
// //   totalAmount += orders[i].amount
// // }

// let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)


// console.log(totalAmount)


// import fs from 'fs'

// let fs = require('fs')

// let output = fs.readFileSync('data.txt', 'utf8')
// .trim()
// .split('\n')

// console.log(output)

let mahasiswa = [
  {nama: 'Steve Rogers', umur: 23},
  {nama: 'Tony Stark', umur: 7},
  {nama: 'Barness Lane', umur: 12},
  {nama: 'Cody Jones', umur: 90},
  {nama: 'Cody Jones', umur: 90},
  {nama: 'Galad Driel', umur: 43},
]

class User {
  constructor (users) {
    this.users = users
  }
  youngUser (batas = 100) {
    return this.users.filter((user) => user.umur < batas)
  }

  ageAverage () {
    let sum = this.users.reduce((sum, user) => sum + user.umur, 0)
    return sum/this.users.length
  }
}

$users = new User(mahasiswa);

console.log($users.youngUser(90));


// let mahasiswaDibawahUmur = [];
// const BAWAH_UMUR = 50
// for (let i = 0; i < mahasiswa.length; i++) {
//   if (mahasiswa[i].umur < BAWAH_UMUR) {
//     mahasiswaDibawahUmur[i] = mahasiswa[i]
//   }
// }

// let mahasiswaDibawahUmur = mahasiswa.filter((x) => x.umur < 50)

// let umurAverage = mahasiswaDibawahUmur.reduce((sum, mahasiswa) =>
//                   sum + mahasiswa.umur, 0)

// console.log(mahasiswaDibawahUmur)

// console.log(umurAverage/mahasiswa.length)
