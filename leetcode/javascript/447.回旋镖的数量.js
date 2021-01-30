/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {

    let dp=[];
    

    for(let i = 0 ; i < points.length; i++){
        dp[i]=[];
        for(let j = 0 ; j < points.length; j++){
            dp[i][j]=(points[i][0]-points[j][0])*(points[i][0]-points[j][0])+(points[i][1]-points[j][1])*(points[i][1]-points[j][1]);
        }
    }

    let res=0;
    for(let i = 0 ; i < dp.length; i++){
       // let cnt=0;
        for(let k = 0 ; k < dp[i].length -1; k++){
            if(k===i)continue;
            for(let m = k+1 ; m < dp[i].length; m++){
                if(m===i )continue;
                if(dp[i][k]===dp[i][m]){
                    res+=2;
                }
                
            }
        }
    }

    return res;


    
};
// @lc code=end

