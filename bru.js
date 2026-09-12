// // const characters =
// //     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// // function* generateStrings() {
// //     let length = 1;

// //     while (true) {
// //         // Start with the first character for this length
// //         const indexes = new Array(length).fill(0);

// //         while (true) {
// //             // Convert indexes to a string
// //             let result = "";

// //             for (let i = 0; i < length; i++) {
// //                 result += characters[indexes[i]];
// //             }

// //             yield result;

// //             // Increase like a counter
// //             let position = length - 1;

// //             while (position >= 0) {
// //                 indexes[position]++;

// //                 if (indexes[position] < characters.length) {
// //                     break;
// //                 }

// //                 indexes[position] = 0;
// //                 position--;
// //             }

// //             // If all positions overflowed, increase string length
// //             if (position < 0) {
// //                 break;
// //             }
// //         }

// //         length++;
// //     }
// // }

// // // Example
// // const generator = generateStrings();

// // for (let i = 0; i < 100; i++) {
// //     console.log(generator.next().value);
// // }




// //------------------------------------------------

// function infiniteIdCreator() {
//     let id = 1;
//     return 10
//     while (id < 5) {
//         // console.log(id);
//         // yield id++;
//         console.log(id);
//         return id++;
//         console.log(id);
//     }
// }

// const idGen = infiniteIdCreator();
// console.log(idGen);

// // console.log(idGen.next().value); // 1
// // console.log(idGen.next().value);
// // console.log(idGen.next().value); // 2
// // infiniteIdCreator();

// let a=1;
// function call(){
//   console.log(`Executed ${a}`);
//   a++;
//   call();
// }

// call();



// randomStringGenerator.js
// const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// function generateRandomString(length) {
//     let result = "";
//     for (let i = 0; i < length; i++) {
//         result += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     console.log(result);
//     return result;
// }

// function findTargetString(target) {
//     let length = 1;
//     let attempt = "";

//     while (true) {
//         attempt = generateRandomString(length);
//         // console.log(attempt);

//         if (attempt === target) {
//             console.log(`🎉 Matched target string: ${target}`);
//             break;
//         }

//         // Increase length gradually after some attempts
//         if (Math.random() < 0.1) {
//             length++;
//         }
//     }
// }

// // Example usage
// const targetString = "aB9"; // Replace with your input string
// findTargetString(targetString);



//----------------------------------------------------
// lexicographicStringGenerator.js

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
        console.log(str); // print each generated string
        if (str === target) {
            console.log(`🎉 Found target string: ${target}`);
            break;
        }
    }
}

// Example usage
const targetString = "aaaa"; // Replace with your input string
console.log("Wait for a second Going to start the brute force")
console.log('------------------------')
setTimeout(()=>{
findTargetString(targetString);
},3000)












// //-----------------------------------------------

// const readline = require("readline");

// const CHARSET = "abcdefghijklmnopqrstuvwxyz0123456789";

// function nextString(current) {
//   if (current.length === 0) return CHARSET[0];
  
//   const chars = current.split("");
//   let i = chars.length - 1;

//   while (i >= 0) {
//     const idx = CHARSET.indexOf(chars[i]);
//     if (idx < CHARSET.length - 1) {
//       chars[i] = CHARSET[idx + 1];
//       return chars.join("");
//     } else {
//       chars[i] = CHARSET[0];
//       i--;
//     }
//   }
//   return CHARSET[0] + chars.join("");
// }

// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// rl.question("Enter target string: ", (target) => {
//   target = target.toLowerCase();
//   let current = "";
//   let attempts = 0;

//   while (true) {
//     attempts++;
//     console.log(current || "(empty)");

//     if (current === target) {
//       console.log(`\nMatch found: "${current}" in ${attempts} attempts`);
//       break;
//     }
//     current = nextString(current);
//   }

//   rl.close();
// });



// module.exports = function(characters, callback) {
	
// 	var i, intToCharacterBasedString, result;
	
// 	characters = [""].concat(characters); // Useless empty value to start this array on index = 1
	
// 	intToCharacterBasedString = function(num) { // Anoying algorithm..
// 		var charBasedString, modulo;
		
// 		charBasedString = "";

// 		while (num > 0) {
// 			modulo = num % characters.length // Basic calculating
// 			charBasedString = characters[modulo] + charBasedString; // Just push it before the old characters
// 			num = ((num - modulo) / characters.length); // New value of num, annoying calculation
// 		} 

// 		return charBasedString;
// 	};
	
// 	i = 1;
// 	while(i > 0) {
		
// 		result = callback( intToCharacterBasedString( i ) );
		
// 		if( result ){ // If callbacks returns true: we did our job!
// 			break;
// 		}
		
// 		i++;
// 	}
// }
