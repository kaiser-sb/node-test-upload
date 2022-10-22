const file = require ('fs');
console.log("start the first task");

const first = file.readFileSync("./content/first.txt", "utf8");
const second = file.readFileSync("./content/second.txt", "utf8");

//console.log(first);
//console.log(second);

file.writeFileSync("./content/result-sync.txt", `The result is : ${first} ++ ${second}`);
console.log("First task is over!");
console.log("Starting the next task!");

