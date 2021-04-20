/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let h=nums.length,w=nums[0].length;

    if(r * c !== h * w )return nums;
    let res=[];
    let m=-1,n=c;
    for(let i = 0 ; i < h; i++){
        for(let j = 0 ; j < w; j++){
            if(n>=c){
                n=0;m++;
                res[m]=[];
                res[m][0]=nums[i][j];
            }
            else{
                res[m][n]=nums[i][j];
            }
            n++;
            
        }
    }

    return res;
    
};
// @lc code=end

