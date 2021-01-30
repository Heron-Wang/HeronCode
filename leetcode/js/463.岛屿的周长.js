/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let sum=0;
    let redu=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                sum++;
                if(i-1 >= 0 && grid[i-1][j]===1){
                    redu++;
                } 
                if(j-1>=0 && grid[i][j-1]===1){
                    redu++;
                }
            }
        }
    }

    return 4 * sum - redu*2; 
    
    
};
// @lc code=end

