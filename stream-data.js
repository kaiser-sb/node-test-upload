const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
/* 
*** Load data as it is - time lag in case of uploading of large files *** 

    //const text = fs.readFileSync("./content/bigFile.txt", "utf8");
    //res.end(text);
*/
/* 
*** Load data using stream functionality - lesser lag while uploading big files ***
** Data is readed as stream and written in chunks **
*/
    const fileStream = fs.createReadStream("./content/bigFile.txt", "utf8");
    fileStream.on("open", () => {
        fileStream.pipe(res);
    })
    fileStream.on("error", (err) => {
        console.log(err);
    })
})
.listen(5000);