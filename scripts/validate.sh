#!/bin/sh

npx concurrently \
  --kill-others-on-fail \
  --prefix "[{name}]" \
  --names "lint,typecheck,format,build" \
  --prefix-colors "bgGreen.bold.white,bgBlue.bold.white,bgBlack.bold.white,bgMagenta.bold.white" \
    "npm run lint --silent" \
    "npm run typecheck --silent" \
    "npm run format --silent" \
    "npm run build --silent"