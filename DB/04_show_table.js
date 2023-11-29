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
    conn.query(`SHOW TABLES;`, (err,result,feild)=>{
        if(err) throw err;
        for(let row in result){
            Object.keys(result[row]).forEach((props)=> console.log(props));
            console.log(result[row].Tables_in_cat);
        }
        

    })


    conn.end();
})