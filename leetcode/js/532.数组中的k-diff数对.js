/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的K-diff数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(k<0)return 0;
    let res=[];
    nums.sort((a,b)=>(a-b));
    for(let i = 0 ; i < nums.length; i++){
        let j1=nums.indexOf(nums[i]+k);
        let j2=nums.indexOf(nums[i]-k);

        if(j1 !== -1 && j1 !== i){
            let tem=i<j1?""+nums[i]+nums[j1]:""+nums[j1]+nums[i];
            if(res.indexOf(tem)===-1)res.push(tem);
        }

        if(j2 !== -1 && j2 !== i && j2!=j1){
            let tem=i<j2? ""+nums[i]+nums[j2] : ""+nums[j2]+nums[i];
            if(res.indexOf(tem)===-1)res.push(tem);
        }
    }
    console.log(res);
    

    return res.length;
    
};
// @lc code=end

