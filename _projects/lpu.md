---
layout: page
title: LPU
description: 面向端侧大模型推理的处理器架构设计项目，覆盖需求分析、架构定义、Memory Model、Execution Model 与后续 RTL 落地路径。
img: assets/img/projects/lpu/lpu-overview.png
importance: 1
category: work
---

LPU 项目的目标，是围绕端侧大模型推理场景，系统性地完成一套处理器架构的定义与实现路径设计。这个项目不仅关注算子支持和性能目标，也强调从需求、架构、指令集到模型验证和 RTL 实现的完整闭环。

## 项目背景

- 大语言模型正在推动新一轮技术变革，边缘端对大模型推理的需求持续增长。
- 现有主流推理框架和处理器方案更多面向云端，针对端侧大模型优化的架构仍然存在明显空白。
- LPU 项目既服务于真实应用需求，也用于完整梳理 NPU 设计全流程。

## 核心目标

- 支持 Vision Transformer、Large Language Model、Vision Language Model 推理。
- 支持 ResNet、MobileNet 等 DNN 推理任务。
- 支持 bf16 矩阵乘法、激活函数、Reduce、Norm、Softmax、RoPE、Mask 等关键能力。
- 面向工程落地定义清晰的 Memory Model 和 Execution Model。

## 整体架构

<div class="row mt-3 justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/lpu/lpu-overview.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    LPU 整体框图，覆盖 MXU、ARU、IS、BIU、UB、LMB、RMB、PMB、PSB 等关键模块。
</div>

LPU 的架构围绕矩阵乘法、激活与数据搬运三个核心方向组织：

- MXU 负责矩阵乘法计算。
- ARU 负责激活、reshape、reduce 等处理。
- IS 负责取指和向各执行单元分发指令。
- BIU、GDMA、LDMA 共同完成全局与局部数据搬运。
- UB、LMB、RMB、PMB、PSB、ARB 共同组成分层缓冲体系。

## Memory Model

<div class="row mt-3 justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/lpu/lpu-memory-model.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    LPU 的 Data Path 设计，用于定义 GM、UB、LMB、RMB、PMB、PSB、ARB 之间的数据流向。
</div>

在 Memory Model 层面，项目重点明确了：

- 数据如何在 GM、UB 和各类局部 Buffer 之间流动。
- 矩阵乘法左右矩阵、参数与部分和的布局形式。
- 不同算子场景下的数据搬运与 layout 转换方式。

## Execution Model

<div class="row mt-3 justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/lpu/lpu-execution-model.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    通过 set / wait 机制组织 GDMA、LDMA、MXU、ARU 等模块的并行执行与数据依赖关系。
</div>

Execution Model 的重点是通过指令级同步机制管理模块并行：

- GDMA、LDMA、MXU、ARU 等二级模块并行运行。
- Instruction Scheduler 通过 set 和 wait 控制数据依赖。
- 以 matmul 为例，数据搬运、矩阵运算与激活写回可以按依赖顺序组织成稳定流程。

## 项目流程

LPU 项目按照完整处理器研发链路推进：

1. 收集需求：明确支持的网络类型、任务场景、算子能力与性能目标。
2. 定义架构：形成整体处理器架构以及 Memory Model、Execution Model。
3. 定义 ISA：根据模块能力定义指令语义与参数。
4. Function Model 验证 ISA：用 C++ 或 Python 验证指令集是否满足预期需求。
5. 设计微架构：纵向拆分模块、横向演绎功能闭环。
6. Cycle-Accurate Model 验证微架构：用时钟周期级模型评估正确性与性能。
7. RTL 实现：基于已验证架构推进硬件实现与验证。