const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = Router();

router.get('/api/test', (ctx, next) => {
  var json = { name: 'xxx' };
  ctx.body = JSON.stringify(json);
})
app.use(router);