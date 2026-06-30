const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    await client.connect();

    const db = client.db(process.env.DB_NAME);

    const collection = db.collection(process.env.COLLECTION_NAME);
    
    console.log("Collection: ", collection.namespace);
    
    return { client, collection };
}

module.exports = connectDB;