//Get an organized ascendednt array of integers
//find the square of each element
//return an organized ascendent array of the squares

array = [-5, -4, -3, -2, 7]

//With this solution we will compare the most left array value with the most end array value
//this is beacuse the list is order in ascendent order
//If we find the left absolute value to be bigger we square and add that to the newArray and we move the left index to the right
//If we find the right absolute value to be bigger we square and add that to the newArray and we move the right index to the left

function numerosCuadrados(array) {
    //Create a new array to return
    let newArray = [];
    //Create two variables for the first and last index, we will move these two indexes based on the largest one
    let start = 0;
    let end = array.length - 1;
    //Add a for loop to go through the array elements
    for (i in array) {
        //Compare what absolute number is bigger array[start] or array[end], 
        //this way we will get the largest number always
        if (Math.abs(array[start]) > Math.abs(array[end])){
            //Square up the bigger number
            //Add the squared number to the new array in order where the largest will be at the end
            newArray.unshift(Math.pow(array[start],2));
            //If the index at the start was used move this index up
            start++;
        } else {
            //If the index at the end was used move this index down
            newArray.unshift(Math.pow(array[end],2));
            end--;
        }
    }
    return newArray;
}

console.log(numerosCuadrados(array));

//New thing I learned:
//Compare faster using the two index method at the start and end of an array
//Math.abs return the absolute number removing the negative or positive part of it
//Math.pow return a power of the first value multiplied x times second value