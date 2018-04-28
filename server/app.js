const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new koa();
const controller = require('./controller')


app.use(bodyParser());
app.use(controller());



app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`)
  // ctx.body = 'hello world'
});


app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})



// router.get('/hello/:name', async (ctx, next) => {
//   var name = ctx.params.name;
//   ctx.response.body = `<h1>Hello ${name}</h1>`
// })

// router.get('/', )


// router.post('/signin', )

// app.use(router.routes());

// app.use(async ctx => {
//   console.log(`Process ${ctx.request.method} ${ctx.request.url}`)
//   ctx.body = 'hello world koa'
// })
app.listen(3003)