const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

app.use(serve(__dirname + '/static'));

app.listen(3000);
console.log('listen on 3000 post');