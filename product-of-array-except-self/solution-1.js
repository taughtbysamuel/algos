
/**
 *  
 *  This solution is not efficient.
 *  You could get a time limit exceeded error if run on Leetcode
 * 
 *  Time Complexity: O(N^2) Spacd Complexity: O(N)
 *  @param {number[]} nums
 *  @return {number[]} 
 */

var productExceptSelf = function(nums) {
    let len = nums.length;
    let res = [];

    for (let i=0; i<len; i++){
        let tempProduct = 1;
        for (let j=0; j<len; j++) {
            if (j === i) { // ignore the current element
                continue;
            }
            tempProduct *= nums[j];
        }

        res.push(tempProduct);
    }

    return res;
};

