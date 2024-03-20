const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient

let database;

const initDb = async () => {
    const client = await MongoClient.connect("mongodb://localhost:27017")
    database = client.db("daily-quote")
}

const getDb = () => {
    if (!database) {
        throw new Error("Database not found!")
    }
    return database
}

module.exports = {
    initDb: initDb,
    getDb: getDb
}