function Student(name) {
  this.name = name;
}

Student.prototype.printDetails = function () {
  console.log(`Hello, the student is ${this.name}`);
};

const studnet = new Student("Rakshyak")
studnet.printDetails()