const marks = [40,20,43,50,60]
function getHighestMark(marks){
    let max = marks[0]
    marks.forEach((mark,i) => {
        if(max < marks[i]) max = mark
    })
    return max
}

console.log(getHighestMark(marks))