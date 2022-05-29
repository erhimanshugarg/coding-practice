// input [1,2,3,4,2,1,5,3,2,1]
// output [ 1, 2, 3]

function findDuplicateNumbers( numbers) {
    const duplicateNumbers = new Set();
    const uniqueNumbers = [];

    for( let i=0; i< numbers.length; i++ ) {
        // check if number is already present
        const isNumberFound = uniqueNumbers.find( ( value) => {
            return value === numbers[i];
        } );
        if ( !isNumberFound ) {
            uniqueNumbers.push( numbers[i]);// 1, 2, 3, 4,
        } else {
            duplicateNumbers.add(numbers[i])// 2, 1,3
        }
    }
    return Array.from(duplicateNumbers).sort(); //[1,2,3]
}

const duplicateNumbers = findDuplicateNumbers([1,2,3,4,2,1,5,3,2,1,3]);
document.getElementById('output').innerText = duplicateNumbers;


const functionCode = `function findDuplicateNumbers( numbers) {
    const duplicateNumbers = new Set();
    const uniqueNumbers = [];

    for( let i=0; i< numbers.length; i++ ) {
        // check if number is already present
        const isNumberFound = uniqueNumbers.find( ( value) => {
            return value === numbers[i];
        } );
        if ( !isNumberFound ) {
            uniqueNumbers.push( numbers[i]);// 1, 2, 3, 4,
        } else {
            duplicateNumbers.add(numbers[i])// 2, 1,3
        }
    }
    return Array.from(duplicateNumbers).sort(); //[1,2,3]
}`;
document.getElementById('function').innerText = functionCode;