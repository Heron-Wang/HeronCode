/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let res=[];
    for(let i = 0 ; i < M.length; i++){
        res[i]=[];
        for(let j = 0 ; j < M[0].length; j++){
            let sum=0;
            let cnt=1;
            sum+=M[i][j];

            if(i-1>=0)cnt++,sum+=M[i-1][j];
            if(i+1 < M.length) cnt++,sum+=M[i+1][j];

            if(j-1>=0)cnt++,sum+=M[i][j-1];
            if(j+1<M[0].length)cnt++,sum+=M[i][j+1];

            if(i-1>=0 && j-1>=0 )cnt++,sum+=M[i-1][j-1];
            if(i+1<M.length &&j-1>=0) cnt++,sum+=M[i+1][j-1];

            if(i-1>=0 && j+1<M[0].length)cnt++, sum+=M[i-1][j+1];
            if(i+1<M.length && j+1<M[0].length)cnt++, sum+=M[i+1][j+1];

            res[i][j]=Math.floor(sum/cnt);

        }

    }

    return res;
};
// @lc code=end

