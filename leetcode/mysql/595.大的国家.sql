--
-- @lc app=leetcode.cn id=595 lang=mysql
--
-- [595] 大的国家
--
-- https://leetcode-cn.com/problems/big-countries/description/
--
-- database
-- Easy (76.26%)
-- Likes:    109
-- Dislikes: 0
-- Total Accepted:    37.2K
-- Total Submissions: 48.8K
-- Testcase Example:  '{"headers": {"World": ["name", "continent",\t"area",\t"population", "gdp"]}, "rows": {"World": [["Afghanistan", "Asia", 652230, 25500100, 20343000000], ["Albania", "Europe", 28748, 2831741, 12960000000], ["Algeria", "Africa", 2381741, 37100000, 188681000000], ["Andorra", "Europe", 468, 78115,\t3712000000], ["Angola", "Africa", 1246700, 20609294, 100990000000]]}}'
--
-- 这里有张 World 表
-- 
-- +-----------------+------------+------------+--------------+---------------+
-- | name            | continent  | area       | population   | gdp           |
-- +-----------------+------------+------------+--------------+---------------+
-- | Afghanistan     | Asia       | 652230     | 25500100     | 20343000      |
-- | Albania         | Europe     | 28748      | 2831741      | 12960000      |
-- | Algeria         | Africa     | 2381741    | 37100000     | 188681000     |
-- | Andorra         | Europe     | 468        | 78115        | 3712000       |
-- | Angola          | Africa     | 1246700    | 20609294     | 100990000     |
-- 
-- +-----------------+------------+------------+--------------+---------------+
-- 
-- 
-- 如果一个国家的面积超过300万平方公里，或者人口超过2500万，那么这个国家就是大国家。
-- 
-- 编写一个SQL查询，输出表中所有大国家的名称、人口和面积。
-- 
-- 例如，根据上表，我们应该输出:
-- 
-- +--------------+-------------+--------------+
-- | name         | population  | area         |
-- +--------------+-------------+--------------+
-- | Afghanistan  | 25500100    | 652230       |
-- | Algeria      | 37100000    | 2381741      |
-- +--------------+-------------+--------------+
-- 
-- 
--

-- @lc code=start
# Write your MySQL query statement below
select name ,population,area 
from World 
where  area > 3000000 or population > 25000000
-- @lc code=end

