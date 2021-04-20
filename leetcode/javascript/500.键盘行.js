/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let keys=["QWERTYUIOPqwertyuiop","ASDFGHJKLasdfghjkl","ZXCVBNMzxcvbnm"];
    let res=[]
    for(let i = 0 ; i < words.length; i++){
        let j=0;
        if(keys[0].indexOf(words[i][0])!==-1)j=0;
        else if(keys[1].indexOf(words[i][0])!==-1)j=1;
        else j=2;

        let flag=true;
        for(let k = 1 ; k < words[i].length; k++){
            if(keys[j].indexOf(words[i][k]) ===-1 )flag=false;
        }
        if(flag)res.push(words[i]);
        
    }

    return res;
    
};
// @lc code=end

