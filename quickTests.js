array = [-2, -1];

function sortedSquaredArray(array) {
    let newArray = []
    for (i in array) {
        let square = array[i] * array[i];
        if (array[i] < 0) {
            newArray.unshift(square)
        } else {
            newArray.puss(square)
        }
    }
    return newArray;
};

console.log(sortedSquaredArray(array));