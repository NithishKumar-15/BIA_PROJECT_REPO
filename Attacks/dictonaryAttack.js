const crypto = require('crypto');
const fs = require("fs");


const data = fs.readFileSync("../Testing/million_records.txt", "utf8");

const lines = data.split(/\r?\n/);
console.log(lines)

function dictonaryAttack(target) {
    for (const line of lines) {
        const currentHash = crypto.createHash('sha256').update(line).digest('hex');
        if (currentHash === target) {
            console.log('-------------------------------------------')
            console.log(`Founded the password for the hash : ${line}`);
            break;
        }
        console.log(line);
    }
}

module.exports = dictonaryAttack;

//7ef37a4c4c94bb596ec0ae5707e3eec7daab0f23772bb1123e5c0a1d3cf1079c -> NETWORK@123