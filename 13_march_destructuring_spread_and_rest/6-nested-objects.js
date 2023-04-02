function destructure(person) {
  const {
    name,
    address: { street },
  } = person;
  return { name, street };
}
const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "B8, Block, B, Industrial Area.",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
  },
};
console.log(destructure(person));
