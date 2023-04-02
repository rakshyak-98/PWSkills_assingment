function getMinMax(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 0; i< arr.length; i++){
        if(max < arr[i]) max = arr[i]
        if(min > arr[i]) min = arr[i]
    }
    return {min, max}
} 
console.log(getMinMax([2,4,5,3,1,52,6,7,8,9,-1]))