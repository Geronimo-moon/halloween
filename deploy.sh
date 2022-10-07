#!/usr/bin/env sh

# エラー時は停止
set -e

# ビルド
rm -rf dist
npm run build

# ビルド出力ディレクトリに移動
cd dist

git init
git add -A
git commit -m 'deploy'

# https://<USERNAME>.github.io にデプロイする場合
git push -f git@github.com:Geronimo-moon/Geronimo-moon.github.io.git HEAD:gh-pages

cd -
