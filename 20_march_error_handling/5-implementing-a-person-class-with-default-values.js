class Person{
    constructor(name='Unknown', age=0){
        this.name = name
        this.age = age
    }

    getDetail(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
console.log(new Person("Rakshyak", age=25).getDetail())
console.log(new Person().getDetail())