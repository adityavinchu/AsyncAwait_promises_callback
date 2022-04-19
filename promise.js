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
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        datas.push(newdata);
        let error=false;
        if(!error){
            resolve("Promise is resolved");
        }
        else
        {
            reject("ERROR OCCURED");
        }
    }, 2000);
})
   
}
createdata({name:"mahesh",profession:"Software Engineer"}).then(getData).catch(err=>console.log(err))

getData();