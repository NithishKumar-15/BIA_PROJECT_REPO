//a13384280c6d9eb0001034288588037139a161d5f8d053950fa11484214f434a
//38760eabb666e8e61ee628a17c4090cc50728e095ff24218119d51bd22475363



const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const maxLength = 5;

function generateString(current, length) {

    if (current.length === length) {
        console.log(current);
        return;
    }

    for (let i = 0; i < chars.length; i++) {
        generateString(current + chars[i], length);
    }
}

// Generate from length 1 to 5
console.log("Going to do bruteforce");
console.log("--------------------------")

setTimeout(() => {
    for (let length = 1; length <= maxLength; length++) {
        generateString("", length);
    }
}, 4000);
