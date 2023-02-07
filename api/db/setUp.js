const fs = require('fs');
const db = require("./connection");

const countriesSchema = fs.readFileSync('./db/countries.sql').toString();
const seedData = fs.readFileSync('./db/seed.sql').toString()


const setUpDB = async () => {

    db.query(countriesSchema)
        .then(data => {
            console.log("Set-up for countries complete.");
        })
        .catch(error => console.log(error));

    db.query(seedData)
        .then(data => {
            console.log("Set-up for seed complete.");
        })
        .catch(error => console.log(error));


    db.end();
}


setUpDB()
