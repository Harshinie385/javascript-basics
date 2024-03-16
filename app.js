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

alert(`Hello, ${username}!`)