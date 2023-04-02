const person = {firstName: "Rakshyak", lastName: "Satpathy", age: 25}

function ageInDays(person){
    const fullName = `${person["firstName"]} ${person["lastName"]}`
    const ageInDay = person.age * 365
    return function logMessage(){
        console.log(`The person full name is ${fullName} and their age in days is ${ageInDay}`)
    }
}

const logMessage = ageInDays(person)
logMessage()