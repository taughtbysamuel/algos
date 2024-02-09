/**
 * Time Complexity: O(N) Spacd Complexity: O(N)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;

    // Count the number of zero elements
    let zeroCount = 0;
    let zeroIndex = -1;
    let productWithoutZero = 1;

    // Calculate the product of elements and find the index of the zero element
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            zeroCount++;
            zeroIndex = i;
        } else {
            productWithoutZero *= nums[i];
        }
    }

    // Initialize the result array
    const result = new Array(n).fill(0);

    // If there is exactly one zero, set the product at the zero index
    if (zeroCount === 1) {
        result[zeroIndex] = productWithoutZero;
    } else if (zeroCount === 0) {
        // If there are no zeros, calculate the result using division
        for (let i = 0; i < n; i++) {
            result[i] = productWithoutZero / nums[i];
        }
    }

    return result;
};