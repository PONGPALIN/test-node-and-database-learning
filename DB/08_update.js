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
    let sql = `UPDATE \`products\` SET name = ? WHERE id = ?  `
    console.log(sql);
    let data =
        conn.query(sql, ["อาหารหมา", 1], (err, result,) => {
            if (err) throw err;
            console.log(result);


        })


    conn.end();
})