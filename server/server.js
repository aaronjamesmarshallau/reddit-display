const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');

const app = new Koa();
const router = new Router();

router.get('/api/v1/latest', (ctx, next) => {
    //
});

router.get('/api/v1/about', (ctx, next) => {
    
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(5000);