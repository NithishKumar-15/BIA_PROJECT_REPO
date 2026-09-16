const crypto = require('crypto');


const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function* generateStrings() {
    let length = 1;

    while (true) {
        const total = Math.pow(chars.length, length);

        for (let i = 0; i < total; i++) {
            let str = "";
            let num = i;

            for (let j = 0; j < length; j++) {
                str = chars[num % chars.length] + str;
                num = Math.floor(num / chars.length);
            }

            yield str;
        }

        length++;
    }
}

function findTargetString(target) {
    const generator = generateStrings();

    for (const str of generator) {
        console.log(str);
        const currentHash = crypto.createHash("sha256").update(str).digest('hex');

        if (currentHash === target) {
            console.log(`🎉 Password founded for the hash : ${target}`);
            console.log(`The password is : ${str}`)
            break;
        }
    }
    process.exit();
}


module.exports = findTargetString;

//961b6dd3ede3cb8ecbaacbd68de040cd78eb2ed5889130cceb4c49268ea4d506  --> aa