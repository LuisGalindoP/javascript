//Get an organized ascendednt array of integers
//find the square of each element
//return an organized ascendent array of the squares

array = [-5, -4, -3, -2, 7]

function sortedSquaredArray(array) {
    //Create a let for the new array to return
    let squaredArray = [];
    //Create lets for the start point index 0 and last index
    let start  = 0;
    let end = array.length - 1;

    //Go through all the array indexes
    for (let i = 0; i < array.length; i++) {
        //Compare the two ABSOLUTE numbers of both indexes start and end
        if (Math.abs(array[start]) > Math.abs(array[end])) {
            //If the start index absolute is larger square that and add it to the new array at the begining
            console.log(Math.pow(array[start], 2));
            squaredArray.unshift(Math.pow(array[start], 2));
            start++;
        } else {
            //If the end index absolute is larger square that and add it to the new array at the begining
            console.log(Math.pow(array[end], 2));
            squaredArray.unshift(Math.pow(array[end], 2));
            end--;
        }
    }

    return squaredArray;
}

console.log(sortedSquaredArray(array));

//New thing I learned:
//Compare faster using the two index method at the start and end of an array
//Math.abs return the absolute number removing the negative or positive part of it
//Math.pow return a power of the first value multiplied x times second value