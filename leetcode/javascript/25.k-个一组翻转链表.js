/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (55.35%)
 * Likes:    332
 * Dislikes: 0
 * Total Accepted:    31.5K
 * Total Submissions: 56.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 示例 :
 * 
 * 给定这个链表：1->2->3->4->5
 * 
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 * 
 * 说明 :
 * 
 * 
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k===1)return head;
    let res=new ListNode(0);//新链表的头节点
    res.next=head;
    let ph=res;//每一段的头节点
    let p=head;//遍历节点
    let len=0;
    while(p!=null){//求出长度
        len++;
        p=p.next;

    }
    let les= len % k ;
    let i=1;



    while( i <= len - les){
        if(i > 1 && i % k===0){
            ph=head;
            head=head.next;
            //p = head;
        }else{
            p=head.next;
            head.next=p.next;
            p.next=ph.next;
            ph.next=p;


        }
        i++;

    }




    return res.next;

    
};
// @lc code=end

