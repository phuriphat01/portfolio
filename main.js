const fs = require("fs");
console.log("--START--");
fs.readFile("data.txt","utf-8",(error, data) => {
    console.log("data 1 >>>>", data);
});
fs.readFile("data.txt","utf-8",(error, data) => {
    console.log("data 2 >>>>", data);
});
console.log("--END--")
fs.writeFile("hello.txt","Hello Node.js","utf8",(error, data) => {
    console.log("file saved");
    console.log("dir",__dirname)
    console.log("file",__filename)
});
