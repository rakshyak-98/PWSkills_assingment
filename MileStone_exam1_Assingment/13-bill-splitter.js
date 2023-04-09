let dishes = [
  { name: "Pasta", price: 8.99, rating: 4.5 },
  { name: "Pizza", price: 12.99, rating: 4.2 },
  { name: "Burger", price: 9.99, rating: 4.7 },
  { name: "Salad", price: 6.99, rating: 4.0 },
  { name: "Fish and Chips", price: 11.99, rating: 4.8 },
];

function billSplitter(dishes, totalPerson) {
  const billPerPerson = [];
  const totalCost = dishes
    .map((dish) => dish.price)
    .reduce((accumelate, current) => accumelate + current, 0);
  const perpersonBill = totalCost / totalPerson;
  for (let i = totalPerson; i > 0; i--) {
    billPerPerson.push({ id: i, person_bill: perpersonBill });
  }

  return billPerPerson.sort((per1, per2) => per1.id - per2.id);
}

console.log(billSplitter(dishes, 4));
