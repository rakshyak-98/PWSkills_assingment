function manipulateString(str, callback){
    str = str.toUpperCase()
    return callback(str)
}

function logString(str){
    console.log("The manipulated string is: ".concat(str))
}

manipulateString("this is awasome", logString)