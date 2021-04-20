/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 *
 * https://leetcode-cn.com/problems/binary-watch/description/
 *
 * algorithms
 * Easy (50.84%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    8.9K
 * Total Submissions: 17.5K
 * Testcase Example:  '0'
 *
 * 二进制手表顶部有 4 个 LED 代表小时（0-11），底部的 6 个 LED 代表分钟（0-59）。
 * 
 * 每个 LED 代表一个 0 或 1，最低位在右侧。
 * 
 * 
 * 
 * 例如，上面的二进制手表读取 “3:25”。
 * 
 * 给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。
 * 
 * 案例:
 * 
 * 
 * 输入: n = 1
 * 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16",
 * "0:32"]
 * 
 * 
 * 
 * 注意事项:
 * 
 * 
 * 输出的顺序没有要求。
 * 小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
 * 分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    let maph=[
        ["0"],
        ["1","2","4","8"],
        ["3","5","9","6","10"],
        ["7","11"]
]

    let mapm=[
        ["00"],
        ["01","02","04","08","16","32"],
        ["03","05","09","17","33","06","10","18","34","12","20","36","24","40","48"],
        ["07","11","19","35","13","21","37","25","41","49","14","22","38","26","42","50","28","44","52","56"],
        [ "58","54","46","30","57","53","45","29","51","43","27","39","23","15"],
        [ "59","55","47","31"]
    ];
    function helper(num){
        let res=[];
        for(let  i= 0 ; i <= num && i < maph.length; i++){
            let j = num -i;
            if(j >= mapm.length)continue;
                for(let k = 0; k < maph[i].length ; k++){
                    for(let l = 0 ;l < mapm[j].length; l++){
                        res.push(maph[i][k]+":"+mapm[j][l]);
                    }
                }       
        }
       res.sort();   
       return res;
    }
    return helper(num);

    
};
// @lc code=end

