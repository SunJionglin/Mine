---
title: C++ 的移动语义到底省了什么
date: 2026-10-20 21:30:00
tags: [C++, 笔记]
categories: [编程]
cover: /images/banner.webp
---

写个类返回大数组，明明只是往外递一下就完事，结果慢得离谱。后来才发现，递这一下偷偷复制了一整份。

<!-- more -->

## 拷贝是默认动作

```cpp
struct Buf {
    int* data;
    size_t n;

    Buf(size_t n) : data(new int[n]), n(n) {}
    ~Buf() { delete[] data; }

    Buf(const Buf&) = default;  // 又 new 一份，再逐个元素搬
};
```

## 移动是把钥匙递过去

被移动的对象本来就要死了，不如直接接走它的指针，让它空手走。

```cpp
Buf(Buf&& other) noexcept : data(other.data), n(other.n) {
    other.data = nullptr;
    other.n = 0;
}
```

一句话记住：`std::move` 是个类型转换，不是动作。
