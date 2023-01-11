// practicing modularization and importing and exporting

// import User from './practice.js'
import U, {printName as printUserName, printAge} from './practice.js'

const user = new U('Bob', 11)
console.log(user)
printUserName(user)
printAge(user)