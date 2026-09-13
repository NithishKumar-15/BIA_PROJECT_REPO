const crypto = require('crypto');
const fs = require("fs");

// console.log(data)


// const fs = require("fs");
// const readline = require("readline");

// const file = readline.createInterface({
//     input: fs.createReadStream("./million_records.txt"),
//     crlfDelay: Infinity
// });

// file.on("line", (line) => {
//     const currentHash = crypto.createHash('sha256').update(line).digest('hex');
//     if (currentHash === process.argv[2]) {
//         console.log('-------------------------')
//         console.log(`Founded the password for the hash : ${line}`);
//         file.close();
//     }
//     console.log(line);
// });

const data = fs.readFileSync("./million_records.txt", "utf8");

const lines = data.split(/\r?\n/);
console.log(lines)
for (const line of lines) {
    const currentHash = crypto.createHash('sha256').update(line).digest('hex');
    if (currentHash === process.argv[2]) {
        console.log('-------------------------')
        console.log(`Founded the password for the hash : ${line}`);
        break;
    }
    console.log(line);
}

//1655157
//7ef37a4c4c94bb596ec0ae5707e3eec7daab0f23772bb1123e5c0a1d3cf1079c -> NETWORK@123