const array = [3, 5, -4, 8, 11, 1, 2, 6];
const targetSum = 10;

// SOLUTION 1

function twoNumberSum(array, targetSum) {
    let nums = {};
    for (i in array) {
        let potentialMatch = targetSum - array[i];
        if (potentialMatch in nums) {
            return [potentialMatch, array[i]];
        }else {
            nums[array[i]] = true;
        }
    }
    return [];
}

console.log(twoNumberSum(array, targetSum));

