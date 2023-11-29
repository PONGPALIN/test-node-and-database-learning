const express = require("express");
const fs = require("fs");
const app = express();

function showallprodeuct(database_result) {
    let output = [];
    output.push("<table border = '1' style = 'border-collapse:collapse;'>");
    output.push("<tr>");

    output.push("<th>" +"id" + " </td>");
    output.push("<th>" +"name" + "</td>");
    output.push("<th>" + "stock" + "</td>");
    output.push("<th>" +"price" + "</td>");
    output.push("</tr>");

    for (let i = 0; i < database_result.length; i++) {
        output.push("<tr>");
        output.push("<td>" + database_result[i].id + " </td>");
        output.push("<td>" + database_result[i].name + "</td>");
        output.push("<td>" + database_result[i].stock + "</td>");
        output.push("<td>" + database_result[i].price + "</td>");
        output.push("</tr>");

    }
    output.push("</table>");
    return output.join("\n");


}


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
            console.log(result[0].name);


            res.status = 200;
            fs.readFile("./index.html", (err, data) => {
                let front_end = data.toString();
                let table = showallprodeuct(result);
                front_end = front_end.replace(/{{products}}/g,table)

                res.write(front_end);
                res.end();
            });

            conn.end();
        })



    })
})


app.listen(8080, () => { console.log("Sever Started...") })