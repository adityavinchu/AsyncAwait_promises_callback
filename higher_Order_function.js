const say_hi=function(){
    return "hello"
};

console.log( say_hi());

//-----------------
function Operation(op, number1, number2) {
    return op(number1, number2)
}

function sumBothNumbers(number1, number2) {
    return number1 + number2
}

console.log(Operation(sumBothNumbers, 13, 7));
