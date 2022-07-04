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

    const simpleFind = await dbCollection.find().toArray()
    console.log(simpleFind)

    const simpleFindWithOneSalary = await dbCollection
        .find({ salary: { $gt: "30000" } })
        .toArray()
    console.log(simpleFindWithOneSalary)

    const fsimpleFindWithOneExp = await dbCollection
        .find({ overallExp: { $gt: "1" } })
        .toArray()
    console.log(fsimpleFindWithOneExp)

    const fsimpleFindWithTwo = await dbCollection
        .find({
            $and: [{ yearGrad: { $gt: "2015" } }, { overallExp: { $gt: "1" } }],
        })
        .toArray()
    console.log(fsimpleFindWithTwo, "fsimpleFindWithTwo")




})


