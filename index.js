const findTargetString = require('./Attacks/bruteForce')


if (process.argv[2] === '-b' && process.argv[3] != undefined) {
    console.log("Wait for a second, Going to start the brute force Attack")
    console.log('-----------------Brute Force Attack---------------------')

    setTimeout(() => {
        findTargetString(process.argv[3]);
    }, 3000)


} else if (process.argv[2] === '-d' && process.argv[3] != undefined && process.argv[4] !=undefined) {

} else if (process.argv[2] === '-r' && process.argv[3] != undefined) {

} else if (process.argv[2] === '-b' && process.argv[3] === undefined) {
    console.log('Please provide me the hash to do brute force');
    process.exit();
}
else if (process.argv[2] === '-r' && process.argv[3] === undefined) {
    console.log('Please provide me the hash to do brute force');
    process.exit();
}
else if (process.argv[2] === '-b' && process.argv[3] === undefined) {
    console.log('Please provide me the hash to do brute force');
    process.exit();
}