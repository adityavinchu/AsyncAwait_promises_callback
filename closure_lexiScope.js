 //closure
function greeting(message) 
{
    return function(name){
        return message + ' ' + name;
    }
}
let say_hi = greeting("Hi");
console.log(say_hi("Akshay")); 

 //lexical scope
function x() {
    var a= 10; 
    function y() {
        console.log(a);
    }
    y();
}
x();
