const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
    const charCodes = [];
    let res = ""

    for (let i = 0; i < str.length; i++) {
        const charCode = str[i].charCodeAt().toString();
        let number = parseInt(charCode)
        let binarystring = number.toString(2)

        binarystring = addZeros(binarystring, 8)
        res += binarystring
        // console.log(number)
        // console.log(charCode);
        // charCodes.push(charCode);
    }

    // for (let i = 0; i < charCodes.length; i++) {
    //   res += charCodes[i].toString(2)
    //   // console.log(res)
    // }

    return res;
};


/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
