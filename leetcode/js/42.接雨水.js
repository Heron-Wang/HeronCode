/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length<=2)return 0;
    let delta=[0];
    for(let i = 1; i < height.length;i++){
        delta[i]=height[i]-height[i-1];
    }
    let dp=[0,0];
    let maxi= height[0]>height[1] ? 0 : 1;
    for(let i = 2; i<height.length;i++){
        if(delta[i] <= 0){
            dp[i]=dp[i-1];
        }   
        else{
            let min=Math.min(height[i],height[maxi]);
            let sum=0;
            for(let j = maxi+1; j < i;j ++ ){
                sum+=height[j];
            }
            dp[i]=min*(i-maxi-1) - sum + dp[maxi];
        }
    }
    return dp.pop();

};
// @lc code=end

