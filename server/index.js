const koa = require('koa');
const koaStatic = require('koa-static');
const logger = require('koa-logger');
const Router = require('koa-router');
// const parse = require('co-busboy');
const config = require('serverConfig');
const routers = require('./routers');
// const renderBody = require('renderBody');
// const renderHeader = require('renderHeader');
require('babel-polyfill');

koa()
    .use(logger())
    .use(koaStatic('build'))
    .use(koaStatic('backend'))
    .use(koaStatic('assets'))
    .use(new Router().use('/app/*', routers.pageRouter.routes()).routes())
    .use(new Router().use('/service/*', routers.serviceRouter.routes()).routes())
    // .use(route.get('/app/*', function *homePage() {
    //     this.res.setHeader('content-type', 'text/html; charset=utf-8');
    //     this.status = 200;
    //     this.res.write('<html>');
    //     this.res.write(renderHeader.bind(this)());
    //     this.res.write(renderBody.bind(this)());
    //     this.res.write('</html>');
    //     this.res.end();
    // }))
    // .use(route.all('/service/*', ))

    .use(Router().get('/*', function *defaultRoute() {
        console.log('not regenized url', this.req.url);
        this.redirect('/app/');
    }).routes())
    // .use(route.post('/post', function *handerUpload(next) {
        // if (this.method !== 'POST') return yield next;
        // multipart upload
        // const parts = parse(this);
        // let part;

        // while ((part = yield parts)) {
        //     const stream = fs.createWriteStream(`./assets/${Math.random().toString()}`);
        //     part.pipe(stream);
        //     console.log('uploading %s -> %s', part.filename, stream.path);
        // }

        // this.res.send('OK');
    // }))
    .listen(config.port, () => {
        console.log(`koa server started at port ${config.port}`);
    });
