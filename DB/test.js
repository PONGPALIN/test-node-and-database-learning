const mysql = require("mysql");
let conn = mysql.createConnection({
    host: "localhost",
    user :"root",
    password :"",
    database :"",

});
conn.connect(function(err){
    if(err) throw err;
    console.log("Connect Success!");

    conn.end();
})