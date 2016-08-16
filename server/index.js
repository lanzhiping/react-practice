const koa = require('koa');
const koaStatic = require('koa-static');
const config = require('./config');
const renderBody = require('./renderBody');
const renderHeader = require('./renderHeader');
require('babel-polyfill');

koa()
    .use(koaStatic('build'))
    .use(function* () {
        this.res.setHeader('content-type', 'text/html; charset=utf-8');
        this.status = 200;
        this.res.write('<html>');
        this.res.write(renderHeader());
        this.res.write(renderBody());
        this.res.write('</html>');
        this.res.end();
    })
    .listen(config.port, () => {
        console.log(`koa server started at port ${config.port}`);
    });
