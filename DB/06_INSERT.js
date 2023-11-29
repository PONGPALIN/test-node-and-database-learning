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
    let sql = `INSERT INTO \`products\` (name,price,stock)
    VALUES ? `;
    let xxx =[
        ["ปลาทู",99,20],
       
    ]
    conn.query(sql,[xxx],(err,result)=>{
        if(err) throw err;
        
        

    })


    conn.end();
})