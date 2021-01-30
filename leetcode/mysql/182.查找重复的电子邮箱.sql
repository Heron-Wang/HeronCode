--
-- @lc app=leetcode.cn id=182 lang=mysql
--
-- [182] 查找重复的电子邮箱
--

-- @lc code=start
# Write your MySQL query statement below    
select Email from
(
SELECT Email ,count(Email) as num
FROM Person 
GROUP BY Email
) as tb
where num > 1;
-- @lc code=end

