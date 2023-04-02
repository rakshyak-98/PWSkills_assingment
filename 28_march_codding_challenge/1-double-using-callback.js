function doubleInt(intArray, callback){
    let doubledArray = intArray.map(num => num * 2)
    return callback(doubledArray)
}
doubleInt([1,2,3,4], (arr) => console.log(arr))