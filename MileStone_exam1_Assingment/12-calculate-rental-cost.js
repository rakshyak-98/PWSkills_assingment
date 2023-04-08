const carType = {
  Economy: "Economy",
  Luxury: "Luxury",
  Midsize: "Midsize",
};
function calculateRental(carType, rentedDays) {
  switch (carType) {
    case "Economy": {
      rentedDays *= 4000;
      return rentedDays.toString().concat("/-");
    }
    case "Midsize": {
      rentedDays *= 10000;
      return rentedDays.toString().concat("/-");
    }
    case "Luxury": {
      rentedDays *= 20000;
      return rentedDays.toString().concat("/-");
    }
    default:
      return carType.concat(" not in the list");
  }
}

console.log(calculateRental(carType.Midsize, 4));
