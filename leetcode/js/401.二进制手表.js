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
        [],
        ["56","54","50","42","26","53","49","41","25","47","39","23","35","19","11"],
        ["58","57","55","51","43","27"],
        ["59"],
    ];
        // 生成mapm[3]
    let m=[1,2,4,8,16,32];
    for(let i = 0 ; i < m.length; i++){   
        for(let j = i +1 ; j < m.length; j++){
            for(let k = j +1 ; k < m.length; k++){
                let sum=m[i]+m[j]+m[k];
                if(mapm[3].indexOf(sum) === -1){
                    if(sum<10)mapm[3].push("0"+sum.toString());
                    else mapm[3].push(sum.toString());
                }
            
            }
        }
    }
    

    function helper(num){
        let res=[];

       for(let  i= 0 ; i <=num && i<4 ; i++){
           for(let j = 0 ; j < maph[i].length; j++){
               for(let k = 0 ; k < mapm[num-i].length; k++){
                res.push( maph[i][j]+ ":"+mapm[num-i][k]);
               }
            }
       }
        
       return res;

    }


    return helper(num);

    
};
// @lc code=end

