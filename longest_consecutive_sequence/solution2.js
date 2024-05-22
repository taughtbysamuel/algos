/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let seen = {};
    for (let i=0; i<nums.length; i++) {
        seen[nums[i]] = true;
    }

    let longest = 1;

    for (let i=0; i<nums.length; i++) {
        let current = nums[i];
        if (!seen[current-1]) {
            let tempLongest = 1;
            while(seen[current+1]) {
                tempLongest++;
                current = current+1;
            }
            longest = Math.max(longest, tempLongest);
        }
    }

    return longest;

};