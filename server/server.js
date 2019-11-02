const express = require('express');
let app = express();
const db = require('./database/database.js');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

let PORT = 3000;

app.get('/appointment', (req, res)=>{
  db.query(`SELECT * FROM app_table`, (err, data) =>{
    if (err) console.log(err);
    else{
      console.log("server get route", data);
      res.send(data);
    }
  })
})

app.post('/appointment', (req, res)=>{
  console.log(req.body);
  var sql = `INSERT INTO app_table (patientName, patientId, appTime, patientKind) VALUES (?,?,?,?)`
  db.query(sql, 
    [req.body.patientName, req.body.patientId, req.body.appTime, req.body.patientKind], (err, data) =>{
    if (err){
      console.log("posting to database", err);
    }else{
      res.sendStatus(201);
    }
  })
})

// delete route here
app.delete('/appointment', (req, res) =>{
  console.log(req.body.id);
  db.query(`DELETE FROM app_table WHERE patientId = ?`, [req.body.id], (err, data) =>{
    if (err) {
      console.log(err);
    } else {
      console.log("patient has been deleted");
      res.sendStatus(204);
    }
  });
});

app.listen(PORT, ()=>{
  console.log(`live server is running on port: ${PORT}`);
})