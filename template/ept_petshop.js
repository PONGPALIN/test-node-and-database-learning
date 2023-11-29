const express = require("express");

const app = express();
app.set('view engine', 'ejs');
app.set('views', "views")


app.get('/', (req, res) => {
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
        let sql = `SELECT id,name,stock,price FROM \`products\` ORDER BY id `;
        conn.query(sql, (err, result, feild) => {
            if (err) throw err;
            console.log(result);
            console.log(typeof (result));
            console.log(result.constructor.name);
            console.log(result[0].name);


            res.status = 200;

            res.render("shop_templete", { products: result });

            conn.end();
        })



    })
})

app.get('/insert', (req, res) => {
    const mysql = require("mysql");
    let conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "cat",

    });

    let name = req.query.name || "no_name";
    let price = req.query.price || 0;
    let stock = req.query.stock || 0;
    conn.connect((err) => {

        if (err) throw err;
        console.log("Connect Success!");
        let sql = `INSERT INTO \`products\` (name,price,stock) VALUES
                (?,?,?)
        `;
        conn.query(sql,[name,price,stock], (err, result) => {
            if (err) throw err;
            console.log("Connect Success!");
            let sql = `SELECT id,name,stock,price FROM \`products\` ORDER BY id `;
            conn.query(sql, (err, result, feild) => {
                if (err) throw err;
                console.log(result);
                console.log(typeof (result));
                console.log(result.constructor.name);
                console.log(result[0].name);


                res.status = 200;

                res.render("shop_templete", { products: result });

                conn.end();
            })
        })






    })
})

app.listen(8080, () => { console.log("Sever Started...") })