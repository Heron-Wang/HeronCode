/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {

    let res=[];
    let min=list1.length+list2.length;
    for(let i = 0 ; i <= min && i < list1.length; i++){
        let j=list2.indexOf(list1[i]);

        if(j===-1)continue;
        if(i+j<min){
          min=i+j;  
          res=[];
          res.push(list1[i]);

        }else if(i+j===min){
            res.push(list1[i]);
        }
    }
    return res;
    
};
// @lc code=end

