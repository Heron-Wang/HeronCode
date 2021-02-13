/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 *
 * https://leetcode-cn.com/problems/largest-triangle-area/description/
 *
 * algorithms
 * Easy (62.25%)
 * Likes:    71
 * Dislikes: 0
 * Total Accepted:    8.7K
 * Total Submissions: 14.1K
 * Testcase Example:  '[[0,0],[0,1],[1,0],[0,2],[2,0]]'
 *
 * 给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。
 * 
 * 
 * 示例:
 * 输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
 * 输出: 2
 * 解释: 
 * 这五个点如下图所示。组成的橙色三角形是最大的，面积为2。
 * 
 * 
 * 
 * 
 * 注意: 
 * 
 * 
 * 3 <= points.length <= 50.
 * 不存在重复的点。
 * -50 <= points[i][j] <= 50.
 * 结果误差值在 10^-6 以内都认为是正确答案。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    const n = points.length;
    let maxArea = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (k = j + 1; k < n; k++) {
                const area = calcArea(points[i], points[j], points[k]);
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};


function calcArea(coordA, coordB, coordC){
    const [xCoordA, yCoordA] = coordA;
    const [xCoordB, yCoordB] = coordB;
    const [xCoordC, yCoordC] = coordC;
    
    const sideA = xCoordA * (yCoordB - yCoordC);
    const sideB = xCoordB * (yCoordC - yCoordA);
    const sideC = xCoordC * (yCoordA - yCoordB);
    
    return Math.abs((sideA + sideB + sideC) / 2);
}
// @lc code=end

