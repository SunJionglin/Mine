---
title: 链表反转，手写一遍比看十遍强
date: 2026-10-12 22:10:00
tags: [数据结构, 刷题]
categories: [编程]
---

思路很简单：一边走一边把箭头拧回去。但真写的时候，总在「先改 next 还是先存 next」这一步断链。

<!-- more -->

```cpp
ListNode* reverse(ListNode* head) {
    ListNode* prev = nullptr;
    while (head) {
        ListNode* nxt = head->next;  // 先存下一站
        head->next = prev;           // 再拧箭头
        prev = head;
        head = nxt;
    }
    return prev;
}
```

**先存后改。** 所有挪指针的题都逃不出这四个字。
