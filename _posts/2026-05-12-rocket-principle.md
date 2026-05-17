---
layout: post
title: 造火箭原理
date: 2026-05-12 09:20:00 +0800
description: 先凑齐做成一件事所需的关键要素，再进入执行。
tags: [执行方法, 项目推进, 关键要素]
categories: 方法论
thumbnail: assets/img/posts/rocket-principle-cover.jpg
related_posts: false
---

这篇文章是 [愿景-理论-行动]({% post_url 2026-05-12-vision-theory-action %}) 中“理论”部分的展开。

<div class="row mt-3">
	<div class="col-sm-12">
		{% include figure.liquid loading="eager" path="assets/img/posts/rocket-principle-cover.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
	</div>
</div>

马斯克说，想做成一件事情，只要集齐这件事情要发生的所有要素就行了；即使造火箭，关键步骤也只有有限的若干项。反过来说，如果一件事情缺了关键要素，那么强行去做，结果往往只是浪费时间。

<div class="row mt-3">
	<div class="col-sm-12">
		{% include figure.liquid loading="eager" path="assets/img/posts/rocket-principle-musk.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
	</div>
</div>

放到高质量论文写作里，可以把关键步骤拆成五个因素：

1. 对一个领域有足够深入的理解。
2. 找到该领域已有工作存在的问题。
3. 找到问题的解决方案。
4. 实现解决方案。
5. 总结并组织成论文。

## 基于这套理论，我的做法是

1. 即使发论文的压力很大，也不会一上来就逼着学生看论文、复现、搞科研。刚入组时，很多学生一个关键因素都还没有凑齐，强行推进也很难得到真正的结果。
2. 先带着学生完整做一次 NPU，从收集需求、定义架构和规格、设计指令集、拆微架构，到写代码、做验证，先把对领域的理解和实现能力补起来。
3. 再整理优化过程中暴露出来的问题，做文献调研，寻找解决方案，把“发现问题”和“提出方案”这两个因素补齐。
4. 最后再把整个过程归纳整理，形成论文。

## 为什么本科生不要急着搞科研？

本科生通常很难独立凑齐上面五个因素，因此更适合先把“实现解决方案”的能力练出来，比如积极参加竞赛、完整做项目、打磨工程实现能力。等到方法论、经验数据和问题意识逐渐成形，再进入科研会更稳。

回到总入口：[愿景-理论-行动]({% post_url 2026-05-12-vision-theory-action %})。