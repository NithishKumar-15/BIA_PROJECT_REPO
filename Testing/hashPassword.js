// const crypto = require('crypto');

// console.log(process.argv);

// const hahsedPassword = crypto.createHash('sha256').update(process.argv[2]).digest('hex');
// const hash1=crypto.randomBytes(10).toString('hex');
// console.log(hash1)
// console.log(`Hashed password value : ${hahsedPassword}`);




// const crypto = require('crypto');

// // The target hash you want to match (Example: SHA-256 of "hello")
// const targetHash = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
// const algorithm = 'sha256';

// // Function to generate a random string of a given length
// function generateRandomText(length = 10) {
//     return crypto.randomBytes(length).toString('hex');
// }

// // Main loop to find the matching text
// function findMatchingText() {
//     let attempts = 0;
//     let matched = false;
//     let randomText = '';

//     while (!matched) {
//         attempts++;
//         randomText = generateRandomText(8); // Generates 16-character random hex string
//         console.log(randomText)
//         // Hash the generated text
//         const currentHash = crypto.createHash(algorithm).update(randomText).digest('hex');

//         // Compare with target hash
//         if (currentHash === targetHash) {
//             matched = true;
//         }
//     }

//     console.log(`Match found after ${attempts} attempts!`);
//     console.log(`Random Text: ${randomText}`);
//     console.log(`Hash: ${targetHash}`);
// }

// console.log('Starting search...');

// setTimeout(() => {
//     findMatchingText();

// }, 3000)
// // 


const fs = require("fs");

const output = fs.createWriteStream("million_records.txt");

const total = 5_000_000;

for (let i = 1; i <= total; i++) {
    output.write(`testword${i}\n`);
}

output.end(() => {
    console.log(`Generated ${total} records`);
});