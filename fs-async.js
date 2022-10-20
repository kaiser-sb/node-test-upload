const file = require ('fs');

console.log("start the first task");
file.readFile("./content/first.txt", "utf8", (err, data)=> 
{
    if (err)
    {
        console.log(err);
        return;
    }
    const first = data;
    
    file.readFile("./content/second.txt", "utf8", (err, data)=> 
{
    if (err)
    {
        console.log(err);
        return;
    }
    const second = data;
    const result = `The combined result : ${first} ++ ${second}`;
file.writeFile("./content/result-async.txt", result, (err, data) =>
{
    if (err)
    {
        console.log(err);
        return;
    }
    console.log("First task done!");
} )
})

})

console.log("Start next task!");

