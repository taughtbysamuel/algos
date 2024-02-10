
/**
 * Time Complexity: O(N) Space Complexity: O(N)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length;
    let leftProducts = new Array(len);
    let rightProducts = new Array(len);

    leftProducts[0] = 1;
    for (let i=1; i<len; i++) {
        leftProducts[i] = leftProducts[i-1] * nums[i-1];
    }

    rightProducts[len-1] = 1;
    for (let i=len-2; i>=0; i--) {
        rightProducts[i] = rightProducts[i+1] * nums[i+1];
    }

    let products = new Array(len);
    for (let i=0; i<len; i++) {
        products[i] = leftProducts[i] * rightProducts[i];
    }
    
    return products;
};