const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "files", "starter.txt"), 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log("Hello....");

fs.writeFile(path.join(__dirname, "files", "starter.txt"), "Nice to meet you", (err) => {
    if (err) throw err;
    console.log("Write Complete");
});

process.on('uncaughtException', err => {
    console.log("There was an uncaught error: ", err);
    process.exit(1);
});