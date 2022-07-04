const mongoClient = require("mongodb").MongoClient

const connectionString = 'mongodb://127.0.0.1:27017';

mongoClient.connect(connectionString, (err, db) => {
    if (err) {
        console.error("Error while connecting", err);
        return;
    }

    console.log("Connected to Mongo Database......................")

    const database = db.db("Human-Resoure");

    const dbCollection = database.collection("employee")

    const insertObj =
        [{

            "firstname": "John",
            "lastname": "Doe",
            "salary": 25000,
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": 10000,
            "overallExp": 2,
            "contactInfo": 1234567890,
            "gradStream": "CSE",
            "yearGrad": 2016
        },

        {

            "firstname": "Rohan",
            "lastname": "Jame",
            "salary": 30000,
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 1,
            "contactInfo": 1234567890,
            "gradStream": "CSE",
            "yearGrad": 2015
        },

        {

            "firstname": "Jame",
            "lastname": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 20000,
            "overallExp": 1,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "ECE"
        },

        {

            "firstname": "Sao",
            "lastname": "Avika",
            "salary": 30000,
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": 30000,
            "overallExp": 2,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        },

        {

            "firstname": "Jame",
            "lastname": "roh",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "EEE"
        },

        {

            "firstname": "Rohan",
            "lastname": "Jame",
            "salary": 30000,
            "department": "Techincal",
            "lastCompany": "Y",
            "lastSalary": 30000,
            "overallExp": 1,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        },

        {

            "firstname": "Jame",
            "lastname": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 20000,
            "overallExp": 1,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "ECE"
        },

        {

            "firstname": "Sao",
            "lastname": "Avika",
            "salary": 30000,
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        },

        {

            "firstname": "Jame",
            "lastname": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "EEE"
        },

        {

            "firstname": "Rohan",
            "lastname": "Jame",
            "salary": 30000,
            "department": "Techincal",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 1,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        },

        {

            "firstname": "Jame",
            "lastname": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 20000,
            "overallExp": 1,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "ECE"
        },

        {

            "firstname": "Sao",
            "lastname": "Avika",
            "salary": 30000,
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        },

        {

            "firstname": "Jame",
            "lastname": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "EEE"
        }];



    const dbCreate = await dbCollection.insertMany(insertObj);
    console.log(dbCreate);



})


