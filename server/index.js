const koa = require('koa');
const koaStatic = require('koa-static');
const logger = require('koa-logger');
const route = require('koa-route');
// const parse = require('co-busboy');
// const fs = require('fs');
const config = require('serverConfig');
const renderBody = require('renderBody');
const renderHeader = require('renderHeader');
require('babel-polyfill');

// we need to explicitly set 404 here
// so that koa doesn't assign 200 on body=
koa()
    .use(logger())
    .use(koaStatic('build'))
    .use(koaStatic('backend'))
    .use(koaStatic('assets'))
    .use(route.get('/', function *homePage() {
        this.res.setHeader('content-type', 'text/html; charset=utf-8');
        this.status = 200;
        this.res.write('<html>');
        this.res.write(renderHeader());
        this.res.write(renderBody());
        this.res.write('</html>');
        this.res.end();
    }))
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
    .use(function *pageNotFound(next) {
        yield next;
        if (this.status !== 404) return;
        this.status = 404;
        switch (this.accepts('html', 'json')) {
        case 'html':
            this.type = 'html';
            this.body = '<p>Page Not Found</p>';
            break;
        case 'json':
            this.body = {
                message: 'Page Not Found',
            };
            break;
        default:
            this.type = 'text';
            this.body = 'Page Not Found';
        }
    })
    .listen(config.port, () => {
        console.log(`koa server started at port ${config.port}`);
    });
