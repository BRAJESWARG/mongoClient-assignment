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

    const deleteWithLastCompany = await dbCollection.deleteMany({
        lastCompany: "Y",
      })
      console.log(deleteWithLastCompany)


})


