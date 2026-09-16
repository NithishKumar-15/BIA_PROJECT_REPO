#!/usr/bin/env node

const findTargetString = require('./Attacks/bruteForce')
const dictonaryAttack = require('./Attacks/dictonaryAttack')
const compareTextInExcel = require('./Attacks/Rainbow_table')
const { askUser, authentication } = require('./Data_Storage_Authentication/insert_Data')


if (process.argv[2] === '-b' || process.argv[2] === '-d' || process.argv[2] === '-r' || process.argv[2] === '-s' || process.argv[2] === '-a' || process.argv[2] === undefined) {
    if (process.argv[2] === '-b' && process.argv[3] != undefined) {
        console.log("Wait for a second, Going to start the brute force Attack")
        console.log('-----------------Brute Force Attack---------------------')

        setTimeout(() => {
            findTargetString(process.argv[3]);
        }, 3000)


    } else if (process.argv[2] === '-d' && process.argv[3] != undefined && process.argv[4] != undefined) {
        console.log("Wait for a second, Going to start the dictonary Attack")
        console.log('-------------------Dictonary Attack-------------------')

        setTimeout(() => {
            dictonaryAttack(process.argv[3], process.argv[4]);
        }, 3000)
    } else if (process.argv[2] === '-r' && process.argv[3] != undefined && process.argv[4] != undefined) {
        console.log("Wait for a second, Going to start the Rainbow table Attack")
        console.log('-------------------Rainbow table Attack-------------------')
        setTimeout(() => {
            compareTextInExcel(process.argv[3], process.argv[4], null);
        }, 3000)
    } else if (process.argv[2] === '-b' && process.argv[3] === undefined) {
        console.log('Please provide me the hash to do brute force');
        console.log('------------------No Hash-------------------');
        process.exit();
    } else if (process.argv[2] === '-d' && (process.argv[3] === undefined || process.argv[4] === undefined)) {
        console.log('Please provide me the hash to do dictonary attack & the dictonary file path');
        console.log('--------------------------No Hash or file path-----------------------------');
        process.exit();
    }
    else if (process.argv[2] === '-r' && (process.argv[3] === undefined || process.argv[4] === undefined)) {
        console.log('Please provide me the hash to do rainbow table attack & the file path');
        console.log('--------------------------No Hash or file path-----------------------');
        process.exit();
    } else if (process.argv[2] === '-s') {
        askUser();
    } else if (process.argv[2] === '-a') {
        authentication();
    } else if (process.argv[2] === undefined) {
        console.log('Wlecome to the hashdek tool kit')
        console.log('---------------------------------------')
        console.log('mention -b for brute force');
        console.log('mention -d for dictonary attack')
        console.log('mention -r for Rainbow table attack')
        console.log('mention -s to store your data to BD')
        console.log('mention -a to fetch your details from BD')
        process.exit();
    }

} else {
    console.log('Given flage is invalid flag')
    process.exit();
}

