function toFahrenheit(celsius) {
    try{
        return (celsius * 9/5) + 32;
    }catch(error){
        return error.message
    }
}
console.log(toFahrenheit(30))