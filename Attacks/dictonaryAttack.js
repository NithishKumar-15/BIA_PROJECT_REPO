const crypto = require('crypto');
const fs = require("fs");

function dictonaryAttack(target, filePath) {
    // console.log(typeof(filePath))
    // console.log(filePath);
    const data = fs.readFileSync(filePath, "utf8");

    const lines = data.split(/\r?\n/);

    for (const line of lines) {
        const currentHash = crypto.createHash('sha256').update(line).digest('hex');
        if (currentHash === target) {
            console.log('-------------------------------------------')
            console.log(`Founded the password for the given hash`);
            console.log(`The password is : ${line}`)
            break;
        }
        console.log(line);
    }
    process.exit();
}


module.exports = dictonaryAttack;

// dictonaryAttack("7ef37a4c4c94bb596ec0ae5707e3eec7daab0f23772bb1123e5c0a1d3cf1079c")


//7ef37a4c4c94bb596ec0ae5707e3eec7daab0f23772bb1123e5c0a1d3cf1079c -> NETWORK@123