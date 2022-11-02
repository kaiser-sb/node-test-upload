//Use Stream to read big files
const {createReadStream} = require("fs");

const stream = createReadStream("./content/bigFile.txt", {highWaterMark: 90000});

stream.on('data', (result) => {
    console.log(result);
})
stream.on("error", (err) => {
    console.log(err);
})
