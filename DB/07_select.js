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
    // let sql = `SELECT name,stock,price FROM \`products\`  `
    let sql = `SELECT id,name,stock,price FROM \`products\`  `;
    conn.query(sql,(err,result,feild)=>{
        if(err) throw err;
        console.log(result);
        console.log(result[0].name);

        

    })


    conn.end();
})