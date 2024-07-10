const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'crime_management_system' 
});


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});


app.use(express.static('public'));


app.post('/report-crime', (req, res) => {
    const { crimeType, crimeDescription, reporterName, reporterContact } = req.body;


    const sql = 'INSERT INTO crime_reports (crimeType, crimeDescription, reporterName, reporterContact) VALUES (?, ?, ?, ?)';
    db.query(sql, [crimeType, crimeDescription, reporterName, reporterContact], (err, result) => {
        if (err) {
            throw err;
        }
        console.log('Crime report inserted:', result);

        
        res.send('Crime report received and saved!');
    });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
