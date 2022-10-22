/*
Two possible alternatives to shorten the Operations =>
1. Using "util" package with "fs" package
2. Using "fs" package and requiring promise directly from the same
*/

//1. First approach - Using "util" module

/*
const {readFile, writeFile} = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
*/
//After the above approach, declared functions can be used directly to return promises

//2. Second approach - Requiring promise directly from "fs"
//No need to use "util" seperately and assign a different function
//const {readFile, writeFile} = require("fs").promises;

const start = async() => {
    try {
        const first = await readFile("./content/first.txt", "utf8");
        const second = await readFile("./content/second.txt", "utf8");
        await writeFile("./content/async-await-short.txt",
        `This is the result achieved in shortest way!!! => ${first} ${second}`);
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start();
