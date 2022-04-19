function func()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>resolve("Resolved.."),2000)
    });
}

async function fun()
{
    const a=await func();
    console.log(a);
}
fun();
