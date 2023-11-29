const mysql = require("mysql");
let conn = mysql.createConnection({
    host: "localhost",
    user :"root",
    password :"",
    database :"shop",

});
conn.connect((err)=>{
    if(err) throw err;
    console.log("Connect Success!");
    conn.query("DROP DATABASE shop", (err,result)=>{
        if(err) throw err;
        console.log("DROP DATABASE!");

    })


    conn.end();
})