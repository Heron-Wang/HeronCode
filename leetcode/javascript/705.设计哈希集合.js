/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.s= new Set();
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.s.add(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {

    this.s.delete(key);
    
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.s.has(key)
    
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

