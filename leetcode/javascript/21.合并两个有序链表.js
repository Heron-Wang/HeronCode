/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (58.77%)
 * Likes:    768
 * Dislikes: 0
 * Total Accepted:    155.8K
 * Total Submissions: 265K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let newList=new ListNode(0);
    let q=newList;
    while( l1 !== null && l2 !== null)
    {
        if(l1.val <= l2.val){
            q.next=l1;
            q=q.next;
            l1=l1.next;
        }
        else  if(l1.val>l2.val){
            q.next=l2;
            q=q.next;
            l2=l2.next;

        }
    }
    while( l1 !== null){
        q.next=l1;
        q=q.next;
        l1=l1.next;

    }

    while( l2 !== null){
        q.next=l2;
        q=q.next;
        l2=l2.next;
        
    }

    q.next=null;
    return newList.next;
    
};
// @lc code=end

