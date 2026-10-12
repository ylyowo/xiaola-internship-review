# GitHub Pages 部署

目标仓库：https://github.com/ylyowo/xiaola-internship-review
部署成功后的地址：https://ylyowo.github.io/xiaola-internship-review/

## 公开范围

只上传源码、部署配置、锁文件、README 和四张已确认可公开的测试设计图片。
三份原始 Markdown 工作记录、预览截图、环境变量、缓存、本机启动脚本已加入 .gitignore。
项目原本没有 Git 仓库和本地历史；如果目标仓库中曾上传过敏感资料，忽略规则不能删除其历史，需要另行审核和处理。

网页中的文字和 public/images 仍会公开，.gitignore 不会隐藏网页已展示的内容。

## 上传与启用

1. 在 GitHub 登录 ylyowo，打开目标仓库。若仓库非空，先核对内容，不要强制推送。
2. 首次提交准备好后，在项目终端运行 `git push -u origin main`，按 GitHub 提示完成认证。不要把 token 写进代码或远端 URL。
3. 在仓库 Settings → Pages → Build and deployment，将 Source 设为 **GitHub Actions**。
4. 打开 Actions → Deploy GitHub Pages；若之前的推送没有部署成功，点击 Run workflow → main → Run workflow。
5. 等待 build 与 deploy 变绿，再打开上方 HTTPS 地址。GitHub Actions 的部署输出会提供实际页面 URL。

后续修改后执行 `git add .`、`git commit -m "Update review website"`、`git push`，自动重新部署。

## 技术配置

- Vite 生产 base：`/xiaola-internship-review/`，开发环境保留 `/`。
- 图片 src 与原图链接通过 `import.meta.env.BASE_URL` 生成。
- 使用锚点导航，无 React Router；`/#practice`、`/#ai` 等直接访问和刷新均由同一个 index.html 处理。
- 字体使用系统字体，无外部字体文件。
- Actions 使用 Node 22、`npm ci`、`npm run build`，仅上传 dist。
- GitHub 提供 HTTPS，不需要数据库、后端或付费 API。

## 本机 npm

当前机器没有默认 npm，可使用安装在临时目录的工具：

```sh
export PATH="/Users/yly/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"
node /private/tmp/xiaola-deploy-tools/node_modules/npm/bin/npm-cli.js run build
```

其他安装 Node.js 的机器可直接执行 `npm ci` 与 `npm run build`。
