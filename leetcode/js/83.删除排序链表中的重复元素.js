/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let p=head;
    while(p!==null && p.next!=null){
        while(p.next!==null && p.val === p.next.val){
            p.next=p.next.next;
        }
        p=p.next;
    }

    return head;

    
};
// @lc code=end

