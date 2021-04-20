--
-- @lc app=leetcode.cn id=196 lang=mysql
--
-- [196] 删除重复的电子邮箱
--
-- https://leetcode-cn.com/problems/delete-duplicate-emails/description/
--
-- database
-- Easy (65.24%)
-- Likes:    327
-- Dislikes: 0
-- Total Accepted:    69.3K
-- Total Submissions: 106.2K
-- Testcase Example:  '{"headers": {"Person": ["Id", "Email"]}, "rows": {"Person": [[1, "john@example.com"], [2, "bob@example.com"], [3, "john@example.com"]]}}'
--
-- 编写一个 SQL 查询，来删除 Person 表中所有重复的电子邮箱，重复的邮箱里只保留 Id 最小 的那个。
-- 
-- +----+------------------+
-- | Id | Email            |
-- +----+------------------+
-- | 1  | john@example.com |
-- | 2  | bob@example.com  |
-- | 3  | john@example.com |
-- +----+------------------+
-- Id 是这个表的主键。
-- 
-- 
-- 例如，在运行你的查询语句之后，上面的 Person 表应返回以下几行:
-- 
-- +----+------------------+
-- | Id | Email            |
-- +----+------------------+
-- | 1  | john@example.com |
-- | 2  | bob@example.com  |
-- +----+------------------+
-- 
-- 
-- 
-- 
-- 提示：
-- 
-- 
-- 执行 SQL 之后，输出是整个 Person 表。
-- 使用 delete 语句。
-- 
-- 
--

-- @lc code=start
# Write your MySQL query statement below
delete p1 # 找到重复且较大的id进行删除
from Person  p1,
    Person p2
where p1.Email = p2.Email and p1.Id > p2.Id

-- @lc code=end

