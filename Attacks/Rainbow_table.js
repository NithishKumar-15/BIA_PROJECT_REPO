// npm install xlsx
const xlsx = require('xlsx');

function compareTextInExcel(searchText, filePath, sheetName) {

    try {
        const workbook = xlsx.readFile(filePath);


        const sheet = sheetName
            ? workbook.Sheets[sheetName]
            : workbook.Sheets[workbook.SheetNames[0]];


        const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        const matches = [];

        for (let i = 1; i < rows.length; i++) {
            const [colA, colB] = rows[i];
            console.log(colA + ' : ' + colB);
            // if (String(colA).trim() === searchText.trim()) {
            //     matches.push({ row: i + 1, column: 'A', value: colA, matchedWith: colB });
            // }

            if (String(colB).trim() === searchText.trim()) {
                matches.push({ row: i + 1, column: 'B', value: colB, matchedWith: colA });
                break;
            }
        }

        if (matches.length > 0) {
            console.log('----------------------------------')
            console.log('----------------------------------')
            console.log(`Found ${matches.length} match(es):`);
            console.log(matches[0].matchedWith + ' : ' + matches[0].value)
            process.exit();
        } else {
            console.log('No match found.');
        }
    } catch (error) {
        console.log('There is an error in the code')
        console.log(error)
    }

}


// const filePath = '/home/nithish/Documents/MyLearning/BIA_PROJECT/Testing/passwords_sha256.csv';
// const searchText = '36bf0fad427fae21ac78bc7646ea67789b5f26060a76310013bb311579bd0c03';

// compareTextInExcel(searchText,'../Testing/passwords_sha256.csv', null);

module.exports = compareTextInExcel;

