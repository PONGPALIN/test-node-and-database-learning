const fs = require("fs");

const readfileCallback = (err,data)=>{
    if(err) throw err;
    console.log(data.toString());
}

fs.readFile("./data.txt",readfileCallback);