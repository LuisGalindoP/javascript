const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 8, 10,];

function isValidSubsequence(array, sequence) {
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === sequence[0]) {
            sequence.shift();
        }
    }
    if (sequence.length) {return false}  {return true};
}

console.log(isValidSubsequence(array,sequence));

