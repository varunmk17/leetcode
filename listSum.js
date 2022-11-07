// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }


// O(N)
function solution(a, b) {
    const reversedListA = reverseList(a);
    const reversedListB = reverseList(b);
    
    const sumOfLists = addTwoLists(reversedListA, reversedListB)
    return reverseList(sumOfLists);
}

// O(MAX(M,N)) + 1
const addTwoLists = (list1, list2) => {
    let summedList = new ListNode(0);
    let curr = summedList;
    let sum = 0;
    let carry = 0;
    
    while(list1 || list2 || carry > 0) {
        sum = carry;
        
        if(list1) {
            sum += list1.value;
            list1 = list1.next;
        } 
        
        if(list2) {
            sum += list2.value;
            list2 = list2.next;
        }
   
        
        if(sum > 9999) {
            sum = sum - 10000;
            carry = 1;
        } else {
            carry = 0;
        }
        
        curr.next = new ListNode(sum);
        curr = curr.next;
    }
    
    return summedList.next;
    
}

// O(N)
const reverseList = (list) => {
    if(!list) return;
    
    let reversedList = list;
    let curr = list.next;
    list.next = null;
    
    while(curr) {
        const node = curr.next;
        curr.next = reversedList;
        reversedList = curr;
        curr = node;
    }
    
    return reversedList;
}

//   1 [9]
//+ [1,]
//     2,1
