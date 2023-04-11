const user = {
  name: "rakshyak satpathy",
  id: "RAK944320001",
  balance: 30000,
  withdraw: function (amount) {
    this.balance > 0
      ? this.balance -= amount
      : "Insuffecient balance";
  },
  deposit: function (amount) {
    this.balance += amount;
  },
};

debugger;