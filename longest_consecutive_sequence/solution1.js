
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    // Sort the array
    nums.sort((a, b) => a - b);
    
    let longestSequence = 1;
    let currentSequence = 1;
    
    for (let i = 1; i < nums.length; i++) {
        // Skip duplicates
        if (nums[i] !== nums[i - 1]) {
            // Check if the current number is consecutive
            if (nums[i] === nums[i - 1] + 1) {
                currentSequence += 1;
            } else {
                longestSequence = Math.max(longestSequence, currentSequence);
                currentSequence = 1;
            }
        }
    }
    
    // Handle the last streak
    longestSequence = Math.max(longestSequence, currentSequence);
    
    return longestSequence;
};
