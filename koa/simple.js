const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = Router();

// 拦截器
app.use(async(ctx, next) => {
  console.log('--------拦截器开始----------');
  await next();
  console.log('--------拦截器结束----------');
});
app.use(async(ctx, next) => {
  console.log('--------拦截器2开始----------');
  await next();
  console.log('--------拦截器2结束----------');
});

router.get('/api/test', (ctx, next) => {
  console.log('/api/test');
  var json = { name: 'jack' };
  ctx.body = JSON.stringify(json);
});
app.use(router.routes());

app.listen(3000, () => {
  console.log('服务器已启动, 端口3000');
});
