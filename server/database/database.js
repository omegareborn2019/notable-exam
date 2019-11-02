var mysql = require('mysql')

var db = mysql.createConnection({
  user: "root",
  database: "doctor"
})

db.connect(err =>{
  if (err) console.log("database connection err");
  else{
    console.log("database connected");
  }
})

module.exports = db;