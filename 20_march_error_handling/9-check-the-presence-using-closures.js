function numberChecker(arr){
    return function (checksum){
        return Boolean(arr.find(num => num === checksum)) ? true : false
    }
}

const arr = [1,2,3,4,5];
const checksum = numberChecker(arr)
console.log(checksum(2))
console.log(checksum(9))