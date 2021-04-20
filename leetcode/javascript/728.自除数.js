/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res=[];
    for(let i = left ; i <= right; i++){
        if(i%10===0)continue;
        if(isSelfdiv(i))res.push(i);

    }
    function isSelfdiv(n){
        let dg=[];
        let tem=n;
        while(tem >= 1){
            let mod=tem%10;
            tem=Math.floor(tem/10);
            dg.push(mod);
        }
        for(let i = 0 ; i < dg.length; i++){
            //if(n===21)console.log(dg);
            if(n % dg[i] !== 0)return false;
            if(dg[i]===0)return false;
        }
        return true;
    }
    return res;


};
// @lc code=end

