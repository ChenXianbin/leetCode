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
var addTwoNumbers = function(l1, l2) {
    let more_l1 = true,more_l2 = true,result = [],more_than_10 = 0;
    do{
        let num = 0;
        if(more_l1){
            num += l1.val;
            l1 = l1.next;
        }
        if(more_l2){
            num += l2.val;
            l2 = l2.next;
        }
        more_l1 = (l1 !== null);
        more_l2 = (l2 !== null);
        if(more_than_10 === 1 ){
            more_than_10 = 0;
            num += 1;
        }
        result.unshift(num%10);
        if(num>=10){
            more_than_10 = 1;
        }
    } while(more_l1 || more_l2||more_than_10);
    let answer = null;
    for(let i = 0,l=result.length ;i < l ; i++){
        let val = answer;
        answer = new ListNode(result[i]-0);
        answer.next = val;
    }
    return answer;
};
