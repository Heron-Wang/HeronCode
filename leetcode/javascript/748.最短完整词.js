/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短完整词
 */

// @lc code=start
/**
 * @param {string} l
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(l, words) {
    let chars="abcdefghijklmnopqrstuvwxyz";
    let ls=l.toLocaleLowerCase().split("").filter(c=>{
        return chars.includes(c);
    })
  //  console.log(ls);
    let comp=words.filter(word=>{
       let flag=true;
       let cs=[...ls];
       for(let i=0;i<word.length;i++){
           let j=cs.indexOf(word[i]);
           if(j!==-1){
                cs[j]="";
           }
       }
       return cs.join("").length==0;
       
   }) 
  // console.log("comp:"+comp);
   let min=comp[0].length;
   let j=0;
   comp.forEach((v,i)=>{
        if(v.length < min){
            min=v.length;
            j=i;
        }
   })
   return comp[j];
};
// @lc code=end

