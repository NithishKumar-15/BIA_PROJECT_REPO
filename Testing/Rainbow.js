// npm install xlsx
const xlsx = require('xlsx');

function compareTextInExcel(filePath, sheetName, searchText) {

    const workbook = xlsx.readFile(filePath);


    const sheet = sheetName
        ? workbook.Sheets[sheetName]
        : workbook.Sheets[workbook.SheetNames[0]];


    const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    const matches = [];

    for (let i = 1; i < rows.length; i++) {
        const [colA, colB] = rows[i];

        // if (String(colA).trim() === searchText.trim()) {
        //     matches.push({ row: i + 1, column: 'A', value: colA, matchedWith: colB });
        // }

        if (String(colB).trim() === searchText.trim()) {
            matches.push({ row: i + 1, column: 'B', value: colB, matchedWith: colA });
        }
    }

    return matches;
}


const filePath = './passwords_sha256.csv';
const searchText = '36bf0fad427fae21ac78bc7646ea67789b5f26060a76310013bb311579bd0c03';

const result = compareTextInExcel(filePath, null, searchText);

if (result.length > 0) {
    console.log(`Found ${result.length} match(es):`);
    console.log(result);
    console.log(result[0].matchedWith)
} else {
    console.log('No match found.');
}