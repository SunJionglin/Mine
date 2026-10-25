# 这个博客怎么玩（Hexo + Reimu）

## 每天就三条命令

在这个文件夹里：

```bash
npm run dev      # 本地预览，改完自动刷新，地址 http://localhost:4000
npm run build    # 生成到 public/
npm run clean    # 删掉缓存，出怪问题时用
```

## 写一篇

```bash
npx hexo new "文章标题"
```

会在 `source/_posts/` 里生成一个 md，头顶长这样：

```yaml
---
title: 文章标题
date: 2026-10-25 18:00:00
tags: [C++, 笔记]
categories: [编程]
---
```

正文随便写，`<!-- more -->` 之前的算摘要，会显示在首页卡片里。

图片：开 `post_asset_folder: true` 之后，`内容/文章名.md` 旁边会有个同名文件夹，图丢进去，正文写 `![](图名.png)`。

## 改站的样子

两个文件管完全部：

- `_config.yml` —— 站名、副标题、作者、网址、分页、RSS
- `_config.reimu.yml` —— 主题：菜单、banner 大图、头像、侧栏组件、社交链接、页脚、评论系统

首页那张大图换成自己的：把图放 `source/images/banner.webp`（没有就建这个目录），然后在 `_config.reimu.yml` 里写

```yaml
banner: "/images/banner.webp"
```

头像放在 `source/_data/avatar/avatar.webp`。

## 发到网上（你的情况已经配好一半）

仓库名建议就用 **SunJionglin.github.io**，这样网址最干净：`https://sunjionglin.github.io`

```bash
# 1. 在 GitHub 上建仓库 SunJionglin.github.io（不要勾 README）
# 2. 把本地推上去
git remote add origin https://github.com/SunJionglin/SunJionglin.github.io.git
git branch -M main
git push -u origin main
```

3. 仓库 → Settings → Pages → Source 选 **GitHub Actions**
4. 等 Actions 跑完（两三分钟），网址就有了
5. 以后写完文章：`git add -A && git commit -m "新文章" && git push`，自动发布

`_config.yml` 里的 `url` 已经是 `https://sunjionglin.github.io`，仓库名照上面起就不用改。

## 目录速查

```
blog/
├─ _config.yml          站点的设置
├─ _config.reimu.yml    主题的设置
├─ run.cjs              跑 Hexo 的入口（hexo-cli 4 认不了 Hexo 8，用这个绕）
├─ source/
│  ├─ _posts/           文章
│  ├─ about/            关于页
│  ├─ friend/           友链页
│  └─ _data/avatar/     头像
├─ themes/reimu/        主题本体（想改样式就动这里的 source/css）
└─ public/              生成结果，别手改
```

## 常见坑

- 报 `Console xxx has not been registered`：少装了插件，`npm i hexo-server` 之类补上
- 页面是裸 HTML 没样式：`theme:` 写错，或者 `themes/reimu` 没放对
- 改了配置没反应：先 `npm run clean` 再 `npm run build`
- 字体从 Google Fonts 拉，国内慢；想快就把 `_config.reimu.yml` 里 `font.enable` 改成 `false`，用本地字体
