const  url  = require('url');


let myURL =
  new url.URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL.hash);
console.log(myURL.href);
console.log(myURL.protocol);
console.log(myURL.port);
console.log(myURL.query);
console.log(myURL.pathname);
console.log(myURL.searchParams);
