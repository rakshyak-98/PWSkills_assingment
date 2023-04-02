function checkKey(obj) {
  if(!(obj instanceof Object)) return false
  if (obj.hasOwnProperty("name") && obj.hasOwnProperty("age")) {
    return true;
  } else return false;
}
function getperson(person) {
  try {
    if (!checkKey(person)) {
      debugger;
      throw new Error("invalid parameter type");
    }
    return `Name: ${person.name}, Age: ${person.age}`;
  } catch (error) {
    return error.message;
  }
}

const person1 = { name: "Rakshyak" };
const person2 = { name: "Rakshyak", age: 25 };
console.log(getperson(person1))
console.log(getperson(person2))
console.log(getperson(["name", "Mithun"]))
