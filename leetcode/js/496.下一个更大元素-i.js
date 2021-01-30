/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res=[];
    for(let i = 0 ; i < nums1.length; i++){
        let j=nums2.indexOf(nums1[i]) +1;
        while(j<nums2.length ){
            if(nums2[j] <= nums1[i] ){
                j++;
            }
            else break;
        }
        if(j>= nums2.length )res.push(-1);
        else res.push(nums2[j]);

    }

    return res;
    
};
// @lc code=end

