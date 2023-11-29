const mysql = require("mysql");
let conn = mysql.createConnection({
    host: "localhost",
    user :"root",
    password :"",
    database :"cat",

});
conn.connect((err)=>{
    if(err) throw err;
    console.log("Connect Success!");
    conn.query(`ALTER TABLE products ADD COLUMN stock INT(10);`, (err,result,feild)=>{
        if(err) throw err;
        console.log("ALTER OK")
        

    })


    conn.end();
})