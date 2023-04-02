function dropDuplicates(arr){
 const uniqueArray = []

 // instead of manipluting the array create a new array with unique elements. If this approach is not acceptable please guide through commenting;
 
 for(let i = 0; i < arr.length; i++){
    if(uniqueArray.indexOf(arr[i]) == -1){
        uniqueArray.push(arr[i])
    }
 }
 return uniqueArray
}

console.log(dropDuplicates([1,2,2,3,4,5,6]))