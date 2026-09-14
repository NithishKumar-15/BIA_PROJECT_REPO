const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const dbName = 'RainBow_Table';

async function connectDB() {
    try {
        await client.connect();
        console.log('Successfully connected to the MongoDB server');

        const db = client.db(dbName);

    } catch (error) {
        console.error('Connection failed:', error);
    }
}

connectDB();
