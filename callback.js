const datas=[
    {name:"Akash",profession:"Software Engineer"},
    {name:"Rakesh",profession:"Data Scientist"},
    {name:"Amit",profession:"QA"}
];

function getData(){
    setTimeout(()=>{
        datas.forEach((data,index)=>{
            console.log(datas)
        })
    },1000);
}

function createdata(newdata,callback)
{
    setTimeout(() => {
        datas.push(newdata);
        callback();
    }, 2000);
}
createdata({name:"mahesh",profession:"Software Engineer"},getData)

getData();


//-------------------
//Addition

function Sum(num1,num2,add)
{
    let total=num1+num2;
    console.log("Addition: ",total);
    add(25,15)
}

const sum1=(num1,num2)=>{
    console.log("Addition: ",num1+num2);
}
Sum(10,20,sum1);

//------------------------
//set Timeout

let output=(print)=>
{
    setTimeout(() => {
        console.log("printing on screen.");
        print();
    }, 2000);
}

let print=()=>
{
    setTimeout(() => {
        console.log("Line 1 printed");

        setTimeout(() => {
            console.log("Line 2 printed");

            setTimeout(() => {
                console.log("Line 3 printed");

            }, 1000);
        }, 3000);
    }, 5000);
}


output(print);