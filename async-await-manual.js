//Access "fs" library (In this case - two methods only)
const {readFile, writeFile} = require("fs");
//Write two wrapping functions to wrap two different Promise call for two different functions

//This wrapper is for reading an existing file
const getText = (path) =>{
    return new Promise((resolve, reject) =>{
        readFile(path, "utf8", (err, data) =>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

//This wrapper is for writing a new file
const writeText = (path, text) => {
    return new Promise((resolve, reject) =>{
        writeFile(path, text, (err, data) =>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

//Combine both wrapping functions in one async-await function
//to handle both events with a non-blocking approach
const start = async() => {
    try {
        const first = await getText("./content/first.txt");
        const second = await getText("./content/second.txt");
        await writeText("./content/async-await.txt", `${first} ++ ${second}`);
        const finalResult = await getText("./content/async-await.txt");
        console.log(first, second, finalResult);
    } 
    catch (error) {
        console.log(error);
    }
}
start();