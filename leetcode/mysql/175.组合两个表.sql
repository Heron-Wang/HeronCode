--
-- @lc app=leetcode.cn id=175 lang=mysql
--
-- [175] 组合两个表
--

-- @lc code=start
# Write your MySQL query statement below
SELECT Person.FirstName, Person.LastName, Address.City, Address.State
FROM Person 
LEFT JOIN Address USING(PersonId)
-- @lc code=end

