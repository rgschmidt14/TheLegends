class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

function printName(user) {
    console.log(`User's name is ${user.name}`)
}

function printAge(user) {
    console.log(`User's age is ${user.age}`)
}

const user = new User('Bob', 11)
console.log(user)
printName(user)
printAge(user)