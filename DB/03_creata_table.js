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
    conn.query(
        `CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            price FLOAT(7,2)
        
        )`, (err,result)=>{
        if(err) throw err;
        console.log("CREATE TABLE!");

    })


    conn.end();
})