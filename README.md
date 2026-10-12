# 小拉出行 UI/UX 设计实习复盘

React + Vite + TypeScript + Tailwind CSS 4 + Motion。支持本地运行与 GitHub Pages，无后端。

## 打开网站

当前本地服务地址：http://localhost:5173

若关闭服务后需要重新启动，在项目文件夹执行 `pnpm dev`。
本机 Node 不在默认 PATH，可双击 `启动网站.command`，随后打开上方地址。

## 修改内容与图片

- `src/data/content.ts`：章节、工作状态、旅程、订单策略、发票对比、实验结果、计划与图片配置。
- `src/data/copy.ts`：各模块标题、摘要与叙事文字。
- `src/sections/`：每个模块的排版。
- `src/styles/index.css`：视觉样式与响应式规则。
- `public/images/`：放置实际设计截图。

例如将截图放到 `public/images/order-strategy.png`，把 images.order.src 从空字符串改为 `/images/order-strategy.png`。组件自动保留比例并使用 contain 完整显示图片。

## 汇报节奏（15 分钟）

工作回顾 2 分钟 → 业务设计实践 7 分钟 → AI 探索 4 分钟 → 成长规划 2 分钟。
图片资料默认明确占位，旅程与其他设计资料可按需展开。顶部导航、首页入口与章节尾入口均可跳转。

## 内容口径

依据项目三份 Markdown 文件整理。已完成表示设计 / 验收阶段完成，不等同于已上线或已取得业务效果。AI 为阶段 MVP 部分通过，无自动提效工时指标。
后续测试样本采用复盘文档与探索总结的 5–10 个口径；较早探索记录曾提 3–5 个。
参考网站网页读取失败，视觉按照用户提供的 editorial / minimalist 要求独立设计。

## 检查

`pnpm build` 执行 TypeScript 检查与生产构建。

## GitHub Pages

部署配置与上传步骤见 [DEPLOYMENT.md](DEPLOYMENT.md)。
生产地址（部署成功后）：https://ylyowo.github.io/xiaola-internship-review/
