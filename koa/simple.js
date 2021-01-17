const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = Router();

router.get('/api/test', (ctx, next) => {
  var json = { name: 'jack' };
  ctx.body = JSON.stringify(json);
})
app.use(router.routes());

app.listen(3333, () => {
  console.log("服务器已启动");
})
