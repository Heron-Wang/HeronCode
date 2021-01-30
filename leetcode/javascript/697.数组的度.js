/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let degree={};
    for(let i = 0 ; i < nums.length; i++){
        if(degree[nums[i]]==undefined){
            degree[nums[i]]=1;
        }else {
            degree[nums[i]]++;
        }
    }
    let maxfreqv=[];
    let maxf=0;
    console.log(degree);
    
    for(let key in degree){

        if(degree[key]>maxf){
            maxfreqv=[];
            maxfreqv.push(key);
            maxf=degree[key];
        }
        else if(degree[key]==maxf){
            maxfreqv.push(key);
        }
    }
    let res=[];
    for(let i = 0 ; i < maxfreqv.length; i++){
        let tem=[]
        for(let j = 0 ; j < nums.length; j++){
            if(nums[j] === +maxfreqv[i])tem.push(j);
            
        }
        if(res.length===0  || (tem[tem.length-1]-tem[0]<res[res.length-1]-res[0]))res=tem; 
    }


    return res[res.length-1]-res[0] + 1;
    
};
// @lc code=end

