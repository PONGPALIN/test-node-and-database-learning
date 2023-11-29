const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;
const baseURL = "http://localhost"
const httpCAllBackListener = (req, res) => {


    let xCurrentURL = new url.URL(req.url, baseURL + ":" + port)
    console.log(xCurrentURL.toString());

    if (xCurrentURL.pathname == "/") {
        fs.readFile("./home.html", (err, data) => {
            if (err) throw err;
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.write(data.toString());
            res.end("");
        });
    } else if (xCurrentURL.pathname == "/bmi") {
        fs.readFile("./bmi.html", (err, data) => {
            if (err) throw err;
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.write(data.toString());
            res.end("");
        });

    } else if (xCurrentURL.pathname == "/about") {
        fs.readFile("./about.html", (err, data) => {
            if (err) throw err;
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.write(data.toString());
            res.end("");
        });
    } else if (xCurrentURL.pathname == "/bmi_cal") {
        res.setHeader("Content-Type", "text/html; charset= utf-8");
        res.writeHead(200);
        //เช็คค่าที่ออกมา
        console.log(xCurrentURL.searchParams.get("weigth"));
        console.log(xCurrentURL.searchParams.get("heigth"));
        console.log(xCurrentURL.searchParams.get("submit"));

        if (xCurrentURL.searchParams.get("weigth" && "heigth") == 0) {
            res.end("Please input your weigth abd heigth <br/>" +
                "<a href = '/bmi'>BMI</a>")
        }
        else {
            let w = xCurrentURL.searchParams.get("weigth");
            let h = xCurrentURL.searchParams.get("heigth");
            let bmi = w / Math.pow(h / 100, 2);
            res.setHeader("Content-Type", "text/html");
            res.write("<img src ='/dog.jpg' alt = 'dog' width = '200'/>");
            res.end("your BMI is : " + bmi);
    
        }

      


    } 
    else if (xCurrentURL.pathname.indexOf("/public/" == 0)) {

        let fileExist = fs.existsSync("." +xCurrentURL.pathname);
        if(fileExist){
            fs.readFile("."+xCurrentURL.pathname, (err, data) => {
                if (err) throw err;
                res.setHeader("Content-Type", "image/jpg");
                // res.writeHead(200);
                // res.write(data.toString());
                res.end(data);
            });
        }
        
    } 
    else {
        res.writeHead(404);
     
        res.end("");
    }



}
let server = http.createServer(httpCAllBackListener);
server.listen(port);