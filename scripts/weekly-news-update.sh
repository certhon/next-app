#!/bin/bash
# 知识频道周更自动化：每周三 09:00 由 cron 触发（crontab: 0 9 * * 3）
# 流程：claude headless 写新文章并按规范 commit → 本脚本独立 build 兜底验证 → push 触发线上部署
# 日志：~/Library/Logs/licheng-weekly-news.log
set -uo pipefail

PROJECT_DIR="/Users/a1021500667/Documents/test/next-app"
LOG_FILE="$HOME/Library/Logs/licheng-weekly-news.log"
# cron 环境 PATH 极简，显式补上 claude 与 nvm node 的安装路径
# 注意：nvm 升级 node 大版本后需同步更新这里的版本号
export PATH="$HOME/.local/bin:$HOME/.nvm/versions/node/v22.20.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

exec >> "$LOG_FILE" 2>&1

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }
fail() { log "中止：$*"; exit 1; }

log "===== 周更任务开始 ====="

cd "$PROJECT_DIR" || fail "无法进入项目目录（若报 Operation not permitted，需在 系统设置→隐私与安全性→完全磁盘访问权限 中勾选 cron）"

command -v claude >/dev/null || fail "找不到 claude CLI"
command -v npx >/dev/null || fail "找不到 npx（nvm 的 node 版本变更后需更新本脚本的 PATH）"

[ -z "$(git status --porcelain)" ] || fail "工作区有未提交改动，跳过本次自动更新"

git pull --ff-only origin main || fail "git pull 失败"

BEFORE_HEAD=$(git rev-parse HEAD)

claude -p "今天是 $(date +%F)。$(cat "$PROJECT_DIR/scripts/weekly-news-prompt.md")" \
  --dangerously-skip-permissions || fail "claude 执行失败"

AFTER_HEAD=$(git rev-parse HEAD)
[ "$BEFORE_HEAD" != "$AFTER_HEAD" ] || fail "未产生新 commit（写作或构建未完成），本次不发布"

[ -z "$(git status --porcelain)" ] || fail "claude 执行后工作区仍有未提交文件，不 push，请人工检查"

# 独立二次构建，防止未经验证的内容被发布
npx next build || fail "二次 build 验证失败，已保留本地 commit 供人工检查，不 push"

git push origin main || fail "push 失败，已保留本地 commit，可稍后手动 git push"

log "===== 周更完成，已 push 触发部署 ====="
