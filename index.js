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

// /home/nithish/Documents/MyLearning/BIA_PROJECT/Testing/passwords_sha256.csv -> Raiinbow table
// /home/nithish/Documents/MyLearning/BIA_PROJECT/Testing/million_records.txt -> Dictonary attack

// const searchText = '36bf0fad427fae21ac78bc7646ea67789b5f26060a76310013bb311579bd0c03

//961b6dd3ede3cb8ecbaacbd68de040cd78eb2ed5889130cceb4c49268ea4d506  --> aa
// ed968e840d10d2d313a870bc131a4e2c311d7ad09bdf32b3418147221f51a6e2 ->aaaaa
//7ef37a4c4c94bb596ec0ae5707e3eec7daab0f23772bb1123e5c0a1d3cf1079c -> NETWORK@123