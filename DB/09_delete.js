const mysql = require("mysql");
let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cat",

});
conn.connect((err) => {
    if (err) throw err;
    console.log("Connect Success!");
    let sql = `DELETE FROM \`products\`  WHERE id = ?  `
    console.log(sql);
        conn.query(sql, [ 1], (err, result,) => {
            if (err) throw err;
            console.log(result);


        })


    conn.end();
})