// 直接调 Hexo 的接口跑命令（hexo-cli 4 认不了 Hexo 8，绕一下）
const Hexo = require('hexo');

const cmd = process.argv[2] || 'generate';

(async () => {
  const hexo = new Hexo(process.cwd(), {});
  await hexo.init();
  await hexo.call(cmd, {});
  await hexo.exit();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
