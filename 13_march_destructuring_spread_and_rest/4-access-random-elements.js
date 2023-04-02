function arryPick(arr){
    let [first,second, ...rest] = arr;
    debugger
    return [first, second, rest.pop()]
}

console.log(arryPick([1,2,3,4,5]))