let fn_index = async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
      <p>Name: <input name="name" value="koa"></p>
      <p>Password:<input name="password" tye="password"></p>
      <p><input type="submit" value="Submit"></p>
    </form>
  `
};

let fn_signin = async (ctx, next) => {
  // console.log(`ctx.request.body=${JSON.stringify(ctx.request)}`)
  let name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  console.log(`signin with name:${name} password:${password}`);
  if (name === 'koa' && password === '123456') {
    ctx.response.body = `<h1>welcome ${name}</h1>`
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
          <p><a href="/">Try again</a></p>
        `
  }
}
module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin
}