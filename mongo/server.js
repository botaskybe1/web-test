
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydatabase"
  });
export async function getData() {
  
  let response = await con.connect(function(err) {

  if (err) throw err;
  con.query("SELECT * FROM mydatabase.exchange_rate", function (err, result, fields) {
    if (err) throw err;
    return result;
  })
})
return response;
}
 

