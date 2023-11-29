const mysql = require("mysql");
let conn = mysql.createConnection({
    host: "localhost",
    user :"root",
    password :"",
    database :"",

});
conn.connect((err)=>{
    if(err) throw err;
    console.log("Connect Success!");
    conn.query("CREATE DATABASE cat", (err,result)=>{
        if(err) throw err;
        console.log("CREATE DATABASE!");

    })


    conn.end();
})