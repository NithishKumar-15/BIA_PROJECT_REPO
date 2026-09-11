const crypto = require('crypto');

console.log(process.argv);

const hahsedPassword = crypto.createHash('sha256').update(process.argv[2]).digest('hex');
console.log(`Hashed password value : ${hahsedPassword}`);