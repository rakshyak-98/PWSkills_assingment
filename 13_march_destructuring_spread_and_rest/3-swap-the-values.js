function swapping(...args){
    if(args.length !== 2){throw new Error("Required two arguments got ".concat(args.length))}

    let [x,y] = args

    x ^= y
    y ^= x
    x ^= y
    return [x, y]
}

console.log(swapping(1,3))