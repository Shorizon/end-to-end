const fs = require('fs');
const db = require("./connection");

const customersSchema = fs.readFileSync('./db/customers.sql').toString();
const seedData = fs.readFileSync('./db/seed.sql').toString()


const setUpDB = async () => {

    db.query(customersSchema)
        .then(data => {
            console.log("Set-up for customers complete.");
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
