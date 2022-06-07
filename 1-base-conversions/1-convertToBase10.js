// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  //We feed in a binary number with the thing still on it.\
  //We need to "chop" off the first 2 things.
  // praseInt that Number to base 10.
  //IF the first 2 strings 0b THEN I do bottom,
  //else it's a hexicimal and I convert with 16.
  if(str[1] === 'b'){
    operation = 2
  } else {
    operation = 16
  }
  let base = str.slice(2)

  return parseInt(base, operation)
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
