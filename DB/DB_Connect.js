const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const dbName = 'User_Details';

try {
    client.connect();

} catch (error) {
    console.error('Connection failed:', error);
}

module.exports = { client, dbName };
