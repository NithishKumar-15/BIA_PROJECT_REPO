const readline = require('node:readline/promises');
const crypto = require('crypto');
const { client, dbName } = require('../DB/DB_Connect')

const db = client.db(dbName);

const { stdin: input, stdout: output } = require('node:process');

async function askUser() {
    const rl = readline.createInterface({ input, output });

    try {
        const dbname = await rl.question('What is your name : ');
        const dbemail = await rl.question(`What is your email ID : `)
        const dbage = await rl.question(`What is your age : `)
        const dbpassword = await rl.question(`Please enter your password : `)
        const hash = crypto.createHash('sha256').update(dbpassword).digest('hex');
        const data_object = {
            name: dbname,
            email: dbemail,
            age: dbage,
            password: hash
        }

        const collection = db.collection('User_Info'); //

        const result = await collection.insertOne(data_object); //
        if (result.insertedId != undefined || result.insertedId != null) {
            console.log("Data inserted successfully");
        }

    } finally {
        rl.close();
        process.exit();
    }
}



async function authentication() {
    const rl = readline.createInterface({ input, output });
    try {
        const dbname = await rl.question('What is your name : ');
        const dbpassword = await rl.question(`Please enter your password : `)
        const collection = db.collection('User_Info');
        const hash = crypto.createHash('sha256').update(dbpassword).digest('hex');
        const result = await collection.findOne({ password: hash })
        if (result != null) {
            console.log(`                            `);
            console.log(`-------your Info------------`);
            console.log(`Your Name : ${result.name}`)
            console.log(`Your Email : ${result.email}`);
            console.log(`Your age : ${result.age}`)

        } else {
            console.log('Incorrect user name or password');
        }
        // console.log(result);
        // console.log(typeof(result))

    } finally {
        rl.close();
        process.exit();
    }
}

// askUser();
// authentication();

module.exports = { askUser, authentication };
