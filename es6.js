//-----------spread op.----------
let rollNo=[1,2,3,4,5];
let rollNo1=[...rollNo,6,7,8]

console.log(rollNo1);

let rollNo2=[11,21,51,...rollNo1];
console.log(rollNo2);

//----------rest op.-----------

  

//--------------de structuring---------
function calculate(a, b) {
    const addition = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [addition, subtract, multiply, divide];
  }
  const [addition, subtract, multiply, divide] = calculate(5, 8);
  console.log(addition, subtract, multiply, divide);


