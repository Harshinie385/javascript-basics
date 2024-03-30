//identifiers - let, const & console.log

const myName = "Harshinie"

let num = 5

// console.log(myName)
// console.log(num)



num = 10

// console.log(num)

// Data types

let myNumber;
//console.log(myNumber) // undefined

let boolValue = true
let nullValue = null


//console.log(boolValue)
//console.log(nullValue)
// Array

let arr = [1,20,"John","blue"]
//console.log(arr)

let integerArray = [2, 5, 7, 9, 11]

//console.log(integerArray.length)
//console.log(integerArray[0])
//console.log(integerArray[1])
//console.log(integerArray[integerArray.length-1])

//object


const person = {
    name: { 
        firstName: "John",
        secondName: "Doe"
    },
    age: 25,
    place: "London"
}

//console.log(person)

const student = {
    name: "John",
    age: 25,
    courses: [
        {
            courseName: "JS",
            courseCredits: 3

        },
        {
            courseName: "MERN",
            courseCredits: 4
        }
    ]
}

//console.log(student.courses)
//console.log(student.courses[0])
//console.log(student.courses[1].courseName)


//Template Strings

let myNameNew = "Harshinie"

myNameNew =" Gokul"

//console.log(`Hello, ${myNameNew}!`)

//Prompt & Alert

const username = prompt( 'Enter your username: ')
//console.log(username)

//alert(`Hello, ${username}!`)

// Operators
let a = 7
let b = 3

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// a++
// console.log(a)
// b--
// console.log(b)

// Comparators
// console.log(3>4)
// console.log(3<4)
// console.log(3>=4)
// console.log(3>=3)
// console.log(3=='3')
// console.log(3==='3')

// Conditionals

let weatherCondition = "Windy"
let subCondition = "Too Hot"

if (weatherCondition === "Cloudy") {
  console.log("Take the umbrella")
} else if (weatherCondition === "Rainy") {
  console.log("Use the umbrella")
} else if (weatherCondition === "Sunny") {

  if (subCondition === "Too Hot") {
    console.log("Use the umbrella")
  } else {
    console.log("Don't use the umbrella")
  }

} else {
    // console.log("Don't take the umbrella")
}

// Ternary operator

let result = 9 < 15

// result ? console.log("Result is True") : console.log("Result is False")

// Task

// const age = prompt('Enter your age: ')

// if (age > 60) {
//   console.log('Senior Citizen')
// } else if (age < 18) {
//   console.log('Minor')
// } else {
//   console.log('Adult')
// }

// Js false values - false, 0, '', undefined, null, NaN
let bool = 0

if (bool) {
  // console.log('Bool is True')
} else {
  // console.log('Bool is False')
}

// Logical operators

let a1 = 0
let a2 = 'dfdff'

if (a1 || a2) {
  // console.log('Hi')
}

let b1 = 56
let b2 = 89

if (b1 && b2) {
  // console.log('Hello')
}


// For loop

for (let i = 0; i < 5; i++) {
  // console.log(i)
}

// first iteration i = 0
// i = 1
// 2
// 3
// 4
//  i = 5

let arr1 = [45, 57, 63, 67, 56]

// Print all the elements of the array

for (let i = 0; i < arr1.length; i++) {
  // console.log(arr1[i])
}

// i = 0; arr1.length = 5; arr1[0] = 45
// i = 1; arr1[1] = 57 
// i = 2; arr1[2] = 63
// i = 3
// i = 4; arr1[4] = 56
// i = 5; 


// While loop - Dont know how many times you need to loop

let rand = Math.random() // 0 < rand < 1
// console.log(rand) 

// Executing while loop till the rand becomes < 0.5
while (rand > 0.5) {
  // console.log('rand is greater than 0.5')
  rand = Math.random() 
  // console.log(rand) 
} 

// let number = prompt('Enter number :') //3
// console.log(number)

// let factorial = 1
// for (let i = 1; i <= number; i++) {
//   factorial = factorial * i
// }

// console.log(factorial)
// console log 1*2*3 = 6

// i = 1; i <= 3; fact = 1
// i = 2; i <= 3; fact = 2
// i = 3; i <= 3; fact = 6
// i = 4; X

// Functions

const printName = (name) => {
  console.log(name)
}

function printNameNew (name) {
  console.log(name)
}

//printName("Gowtham")
//printName("Gowri")



//let bike = 1
//bike = "r15"


const consoleLogFn = () => {
  console.log('This is a console.log statement')
}

const returnValueFn = () => {
  return 'This is a return statement'
}

//consoleLogFn()
let returnValue = returnValueFn()
//let returnValue = 'This is a return statement'
//console.log(returnValue)

//Early return
const fun = () => {
  console.log('1') 
  return true
  console.log('2')
}

console.log(fun())  